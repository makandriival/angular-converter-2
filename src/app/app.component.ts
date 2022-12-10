import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor (private dataService: DataService,){
    
  };

  symbolsObj : object = {};
  stringObj : string = '';
  

  ngOnInit() {
    this.dataService.getSymbols().subscribe((data)=>{
      this.symbolsObj = data;
    });

   this.dataService.getRates().subscribe((data)=>{
    
  });
  //  console.log(this.currObj);
  }
}
