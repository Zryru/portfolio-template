import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public innerHeight: any;
  public scroll: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = window.innerHeight;
  }

  @HostListener('window:scroll', ['$event'])
  onscroll(event) {
    this.scroll = window.scrollY;
  }

  constructor() { }

  ngOnInit() {
    this.innerHeight = window.innerHeight;
  }

}
