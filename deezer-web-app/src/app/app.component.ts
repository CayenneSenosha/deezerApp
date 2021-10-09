import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() data1: Node | undefined;
  title = 'deezer-web-app';
  data: any = "";
  searching(e:any){
    this.data = e;
    console.log(e);
    
  }
}
