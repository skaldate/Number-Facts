import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  constructor(private http: HttpClient) { }

  getNumberFact(num:number){
    return this.http.get("http://numbersapi.com/"+num, {responseType: 'text'})
    .pipe(map(res=>res))
  }
}
