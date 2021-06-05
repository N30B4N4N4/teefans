import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { config } from './../config';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  messageForm;
  submitted = false;
  sent;
  status;
  
  questions = [
   {q:"如何支付",a:"只接受中銀轉賬"},
   {q:"幾時收到貨",a:"落單後兩星期内"}
 ];
 
  constructor(private formBuilder: FormBuilder,public http: HttpService) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      tel: ['', [Validators.required, Validators.pattern("^(\\d{8}|\\w+@\\w+\\.\\w{2,3})$")]],
      content: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(msg){
    this.submitted = true;
    if(this.messageForm.valid)
    this.sendmail(msg);
  }

  sendmail(msg){
    this.status = "傳送中...";
    this.http.sendEmail(config.origin + '/sendmail', msg).subscribe(
      success=>{if (success) {
                  this.sent = true; 
                  this.status="信息已經成功送出"
                }
                else {
                  this.sent = false;
                  this.status="傳送失敗，請重新嘗試"
                } 
              },
      err=>{console.log(err);this.submitted = false;
            this.sent = false;
            this.status="傳送失敗，請重新嘗試"
      }
    );
  }


}
