import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() search = "";
  @Output() onSearch = new EventEmitter<string>();
  hi: string = 'hello';
  options:string[] = [];
  artistSearched:string ='';
  constructor() { }

  ngOnInit(): void {
  }
  homeIcon(){
    window.location.href ="/home"
    console.log("clicked"); 
  }
  OnSearch(e:any){
     this.search = e;
     this.artistSearched = this.search;
     this.onSearch.emit(e);
  }
}
