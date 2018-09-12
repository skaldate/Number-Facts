import { Component } from '@angular/core';
import { SwUpdate, SwPush } from "@angular/service-worker";
import { interval } from "rxjs";
import { SubscriptionService } from "src/app/services/subscription.service";

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
  
  readonly VAPID_PUBLIC_KEY = "BBdxhfNveHLT5giRLdIJw0Vo8U_jqnkx3l8YUDafySyD4OyVgQuKBlxHxRgStqKSqcIvenO8GJaVNWQq3EhkfwE";


  constructor(private swUpdate:SwUpdate, private swPush: SwPush, private subscription: SubscriptionService){
    swUpdate.available.subscribe(event => { 
        this.updatesAvailable = true;
        swUpdate.activateUpdate().then(() => document.location.reload()); 
    });
  }
  
  ngAfterViewInit(){
      interval(60*60*6).subscribe(()=> this.swUpdate.checkForUpdate());
  }

  subscribeToNotifications() {
    console.log("subscribing to push notification");  
    this.swPush.requestSubscription({
          serverPublicKey: this.VAPID_PUBLIC_KEY
      })
    .then(sub => {
      console.log(sub);
      this.subscription.addPushSubscriber(sub).subscribe()
    })
    .catch(err => console.error("Could not subscribe to notifications", err));
  }


  addNumber(){
    //let number = Math.floor((Math.random() * 100) + 1);
    let number = this.numbers.length+1;
    this.numbers.push(number);
  }
  hide(event:number){
    let num = this.numbers.splice(this.numbers.indexOf(event),1);
    this.hidden=  this.hidden.concat(num);
  }
}


