import { Component, OnInit, Input,OnDestroy } from '@angular/core';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser'
import { Subscription } from 'rxjs';
import { MessageService } from '../../services/message.service';
import {TeximateOptions,TeximateHover,TeximateOrder} from "ng-teximate";

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.css']
})
export class UsageComponent implements OnInit,OnDestroy {
  
  subscription: Subscription;
  onLanguageChange : Subscription;
  @Input() selectedUsage:boolean = false;
  example:string = ''
  output:string = ''

  effectOptions: TeximateOptions = {
    type: 'letter',
    animation: { name: 'bounceInLeft', duration: 1000 },
    word: { type: TeximateOrder.SHUFFLE, delay: 100 },
    letter: { type: TeximateOrder.SHUFFLE, delay: 50 }
  };

  hoverOptions: TeximateHover = {
    type: 'letter',
    in: 'zoomIn',
    out: 'headShake'
  };

  constructor(private sanitizer:DomSanitizer,private messageService: MessageService) {
     this.subscription = this.messageService.getMessage().subscribe((message:any) => { 
               this.selectedUsage = message.usage;
               this.example = message.input;
               this.output =  message.op;
              });
      this.onLanguageChange = this.messageService.getResetValue().subscribe((message:any) => { 
              this.selectedUsage = message.reset;
       });
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
    this.onLanguageChange.unsubscribe();
  }

  showExample(){
    return this.sanitizer.bypassSecurityTrustHtml(this.example);
  }

  showOutput(){
    return this.sanitizer.bypassSecurityTrustHtml(this.output);
  }
}
