import { Component } from '@angular/core';
import { SwUpdate } from "@angular/service-worker";
import { interval } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numbers=[1,2];
  title = 'pwa-demo-angular-rva';
  hidden = [];
  updatesAvailable:boolean = false;

  constructor(private swUpdate:SwUpdate){
    
    swUpdate.available.subscribe(event => { 
        this.updatesAvailable = true;
        swUpdate.activateUpdate().then(() => document.location.reload()); 
    });
      //swUpdate.checkForUpdate();
      
  }
    ngAfterViewInit(){
      interval(60*60*6).subscribe(()=> this.swUpdate.checkForUpdate());
    }
  

  addNumber(){
    let number = Math.floor((Math.random() * 100) + 1);
    this.numbers.push(number);
  }
  hide(event:number){
    let num = this.numbers.splice(this.numbers.indexOf(event),1);
    this.hidden=  this.hidden.concat(num);
  }
}


