import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  samples = ['assets/layout/sample1front.png',
             'assets/layout/sample1back.png',
             'assets/layout/sample2front.png',
             'assets/layout/sample2back.png'];

  constructor() { }

  ngOnInit(): void {
  }

}
