import { Component, OnInit,Input } from '@angular/core';
import {arrayMethodOptions} from '../../languages/defaultconfig'

@Component({
  selector: 'app-selectedmethod',
  templateUrl: './selectedmethod.component.html',
  styleUrls: ['./selectedmethod.component.css']
})
export class SelectedmethodComponent implements OnInit {

  @Input() methodType:string = '';
  @Input() methodFindOption:string = '';
  selectedMethod:string = '';
  options:string[] = [];
  
  constructor() { 
   
    
  }

  ngOnInit() {
    let selectedOption = '';
    let selectedFindOptions = [];
    if(this.methodFindOption === ''){
      console.log(this.methodType);
      selectedOption = Object.keys(arrayMethodOptions.status).filter( x => x === this.methodType)[0];
      this.options = arrayMethodOptions.status[selectedOption];
    }
    else{
      this.options = Object.keys(arrayMethodOptions.status).filter( x => x === this.methodType)
                                                           .map( val => {return arrayMethodOptions.status[val]} )
                                                           .filter( fn => fn === this.methodFindOption);
    } 
    console.log(this.options);
  }

}
