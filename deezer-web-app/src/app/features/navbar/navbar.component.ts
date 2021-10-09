import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  hi: string = 'hello';
  options:string[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  homeIcon(){
    window.location.href ="/home"
    console.log("clicked");
    
  }
}
