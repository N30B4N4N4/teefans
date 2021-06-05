import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {
  innerWidth;
  @Input() title:string;
  @Input() left:string;
  @Input() right:string;
  @Input() bg:string;
  @Input() bgLeft: string;
  @Input() bgRight: string;
  @Input() type = 1;
  @Input() fontSize = '2rem';
  @Input() style={};
  @Input() styleL={};
  @Input() styleT={};
  @Input() styleR={};

  stdFontSize;

  
  constructor() { }

  ngOnInit(): void {
    this.style= {'background-image': this.bg,...this.style};
    this.styleL= {'background-image': this.bgLeft,...this.styleL};
    this.styleT= {'font-size': this.fontSize,...this.styleT};
    this.styleR= {'background-image': this.bgRight,...this.styleR};

  }

}
