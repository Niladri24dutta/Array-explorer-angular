import { Component, OnInit,Input } from '@angular/core';
import {arrayMethodOptions} from '../../languages/defaultconfig'
import {MessageService} from '../../services/message.service'
import { TranslateService } from '@ngx-translate/core';

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
  keyName:string = ''
  
  constructor(private msgService:MessageService,private translateService :TranslateService) { 
    
  }

  ngOnInit() {
    this.getMethodOptions();
  }

  public getDescription(evt:any){
     let currentSelection = this.options.filter( x => x.name === this.selectedMethod)[0];
     if(this.methodFindOption !== ''){
      this.keyName = "primaryMethod.secondaryOptions.status."+this.methodType+"."+this.methodFindOption+"."+this.selectedMethod+".desc";
    }
    else{
      this.keyName = "primaryMethod.secondaryOptions.status."+this.methodType+"."+this.selectedMethod+".desc";
    }   
    this.translateService.get(this.keyName).subscribe( x =>{
      this.selectedDesc = x
    } );
     this.msgService.sendMessage(true,currentSelection.example,currentSelection.output);
  }

  private getMethodOptions(){
    let selectedOption:any;
    let selectedFindOptions = [];
    if(this.methodFindOption === ''){
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
    
  }
  
  clearMessage():void{
    this.msgService.clearMessage();
  }
}
