import { Component, OnInit,Input } from '@angular/core';
import {arrayMethodOptions} from '../../languages/defaultconfig'
import {MessageService} from '../../services/message.service'

@Component({
  selector: 'app-selectedmethod',
  templateUrl: './selectedmethod.component.html',
  styleUrls: ['./selectedmethod.component.css']
})
export class SelectedmethodComponent implements OnInit {

  @Input() methodType:string = '';
  @Input() methodFindOption:string = '';
  selectedMethod:string = '';
  selectedDesc:string = '';
  options:any[] = [];
  
  constructor(private msgService:MessageService) { 

  }

  ngOnInit() {
    this.getMethodOptions();
  }

  public getDescription(evt:any){
     let currentSelection = this.options.filter( x => x.name === this.selectedMethod)[0];
     this.selectedDesc = currentSelection.desc;
     this.msgService.sendMessage(true,currentSelection.example,currentSelection.output);
  }

  private getMethodOptions(){
    let selectedOption:any;
    let selectedFindOptions = [];
    if(this.methodFindOption === ''){
      //console.log(this.methodType);
      this.options  = Object.keys(arrayMethodOptions.status).filter( x => x === this.methodType).map ( p => arrayMethodOptions.status[p])[0];
      
    }
    else{
      selectedOption = Object.keys(arrayMethodOptions.status)
                              .filter( x => x === this.methodType)
                              .map( val => arrayMethodOptions.status[val] )[0];
       this.options = Object.keys(selectedOption)
                            .filter( x => x === this.methodFindOption)
                            .map( v => selectedOption[v] )[0];                                                    
    } 
    //console.log(this.options);
  }
  
  clearMessage():void{
    this.msgService.clearMessage();
  }
}
