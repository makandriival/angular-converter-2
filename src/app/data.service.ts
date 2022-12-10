import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


// ===== https://exchangerate.host/#/#docs api for the project 


export class DataService {
  apiUrlBase = 'https://api.exchangerate.host/latest?base=UAH';
  apiUrlSymbols = 'https://api.exchangerate.host/symbols';

  
  constructor(private _http: HttpClient ) { }
  
  getSymbols() : Observable<any> {
    return this._http.get(this.apiUrlSymbols);
  }
  
  goConvert(amount: number, from: string, to:string) : Observable<any> {
    let apiUrlConvert = `https://api.exchangerate.host/convert?amount=${amount}&from=${from}&to=${to}`;
  return this._http.get(apiUrlConvert);
  }


}
