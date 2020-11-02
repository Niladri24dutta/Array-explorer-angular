import { Component, OnInit, Input,OnDestroy } from '@angular/core';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser'
import { Subscription } from 'rxjs';
import { MessagesService } from '../../services/message.service';
import { NotificationService } from '../../services/notification.service';
import {TeximateOptions,TeximateHover,TeximateOrder} from "ng-teximate";
import { ClipboardService } from 'ngx-clipboard';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(private sanitizer:DomSanitizer,private messageService: MessagesService,private clipboardService: ClipboardService,
             private notificationService:NotificationService,private translate: TranslateService) {
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
  copyContent(){
    this.clipboardService.copyFromContent(this.example);
    let copyMessage = this.translate.instant("app.Notification");
    let copyMessageSummary = this.translate.instant("app.NotificationSummary");
    this.notificationService.sendSuccessMessage(copyMessage,copyMessageSummary);
  }
}
