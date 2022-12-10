
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css'],
   
})

export class ConvertComponent implements OnInit {

  symbols: any = [];

  first = new FormControl('');
  second = new FormControl('');
  firstSymbol = new FormControl('');
  secondSymbol = new FormControl('');

  firstValue: number = 0;
  secondValue: number = 0;
  firstSymbolValue: any = '';
  secondSymbolValue: string = '';

  convertionResult: number = 0;
  resDisp: number = 0;

  // selectFirst: any = 'USD';
  // selectSecond: any = 'UAH';
  
  // ============== geting exchange values ==============


  getFirstValue() { 
    this.firstValue = (this.first.value)
    this.convertRequestFirst(this.firstValue, this.firstSymbolValue, this.secondSymbolValue)
  }
  getSecondValue() { 
    this.secondValue = (this.second.value)
    this.convertRequestSecond(this.secondValue, this.secondSymbolValue, this.firstSymbolValue)
  }
  
  // ========geting symbols===============
  
  getFirstSymbolValue() {
    this.firstSymbolValue = this.firstSymbol.value;
    this.convertRequestFirst(this.firstValue, this.firstSymbolValue, this.secondSymbolValue)
  };
  getSecondSymbolValue() {
    this.secondSymbolValue = this.secondSymbol.value;
    this.convertRequestSecond(this.secondValue, this.secondSymbolValue, this.firstSymbolValue)
  }
  
  // ========= converting request =======
  
  convertRequestFirst (amount: number, from: string, to:string){
    this.dataService.goConvert(amount, from, to)
    .subscribe((data:any)=>{
      this.convertionResult = data.result;
      this.secondValue = this.convertionResult;
  })
}
  convertRequestSecond (amount: number, from: string, to:string){
    this.dataService.goConvert(amount, from, to)
    .subscribe((data:any)=>{
      this.convertionResult = data.result;
      this.firstValue = this.convertionResult;
  })
}
  
  constructor(private dataService: DataService,) { 
  }
  
  ngOnInit() {
    this.dataService.getSymbols().subscribe((data: any)=>{
      let sym = data.symbols;
      for (let prop in sym) {
        this.symbols.push({
          symbol: prop ,
          description: sym[prop].description
        });
      }
    });
  }

}
