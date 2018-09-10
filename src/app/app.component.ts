import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numbers=[1,2];
  title = 'pwa-demo-angular-rva';
  hidden = [];

  addNumber(){
    let number = Math.floor((Math.random() * 100) + 1);
    this.numbers.push(number);
  }
  hide(event:number){
    let num = this.numbers.splice(this.numbers.indexOf(event),1);
    this.hidden=  this.hidden.concat(num);
  }
}


