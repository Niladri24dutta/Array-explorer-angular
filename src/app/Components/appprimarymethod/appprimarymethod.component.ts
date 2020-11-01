import { Component, OnInit,Input,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'
import {MessagesService} from '../../services/message.service'
import {defaultOptions} from '../../languages/defaultconfig'

@Component({
  selector: 'app-appprimarymethod',
  templateUrl: './appprimarymethod.component.html',
  styleUrls: ['./appprimarymethod.component.css']
})
export class AppprimarymethodComponent implements OnInit,OnDestroy{

  options:any[] = [];
  @Input() selectedFilter:string = '';
  message: any;
  subscription: Subscription;
  @Input() selectedFind:string = '';
  constructor(private service:MessagesService) { 
    this.options = defaultOptions.primaryOptions;
    this.subscription = this.service.getResetValue().subscribe(message => { 
      this.message = message;
      this.selectedFilter = this.message.reset;
      this.selectedFind = this.message.reset;
     });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
   }

   ngOnInit(){

   }

   resetOptions(evt:any){
     this.selectedFind = '';
   }
}
