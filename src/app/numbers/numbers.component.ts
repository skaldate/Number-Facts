import { Component, OnInit } from '@angular/core';
import { NumbersService } from "src/app/services/numbers.service";
import { Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent implements OnInit {

  mathFact:string;
  numberFact:string;

  @Input()
  num:number;
  @Output()
  hide: EventEmitter<number> = new EventEmitter<number>();


  constructor(private numberSrv: NumbersService) { }

  ngOnInit() {
    this.numberSrv.getNumberFact(this.num).subscribe(res=>{
      this.numberFact = res;
    })
  }

  hideClick(){
    this.hide.emit(this.num);
  }

}
