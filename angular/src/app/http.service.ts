import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { templateJitUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

templates;
  constructor(private http: HttpClient) { 
  }
  
  //getTemplates(url){
  //  return this.http.get(url);
  //}

  sendEmail(url, data){
    return this.http.post(url, data);
  }


}

