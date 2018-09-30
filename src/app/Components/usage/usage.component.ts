import { Component, OnInit, Input,OnDestroy } from '@angular/core';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser'
import { Subscription } from 'rxjs';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.css']
})
export class UsageComponent implements OnInit,OnDestroy {
  //message: any;
  subscription: Subscription;
  @Input() selectedUsage:boolean = false;
  @Input() example:string = ''
  @Input() output:string = ''

  constructor(private sanitizer:DomSanitizer,private messageService: MessageService) {
     this.subscription = this.messageService.getMessage().subscribe((message:any) => { 
               this.selectedUsage = message.usage;
               this.example = message.input;
               this.output = message.op;
              });
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
