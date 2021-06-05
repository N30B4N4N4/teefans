import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let nav = document.querySelector('#navigation');
    let navbar = document.querySelector('.navbar');
    if (window.pageYOffset > nav.clientHeight){  
      navbar.classList.add('navbar-scroll');
      navbar.classList.remove('navbar-default');
    }else{
      navbar.classList.add('navbar-default');
    }
  }
}
