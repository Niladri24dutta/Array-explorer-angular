import { Component, OnInit,Input,OnDestroy,ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessagesService } from '../../services/message.service';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-stackblitz-sample',
  templateUrl: './stackblitz-sample.component.html',
  styleUrls: ['./stackblitz-sample.component.css']
})
export class StackblitzSampleComponent implements OnInit {

  @Input() showDemo:boolean = false;
  @ViewChild('pg') elm:ElementRef;
  pgElement:HTMLElement;
  subscription: Subscription;
  inputArray:string = `let arr = [5, 1, 8]; \n`;
  html:string = `<h1>Check the output in console.</h1>`;
  projectOptions:any;
  embedProjectOptions:any;
  constructor(private messageService: MessagesService) {
   }

  ngOnInit() {
    this.initPlayground();
  }

  initPlayground(){
    this.projectOptions = {
      files: {
        'index.js': this.inputArray,
        'index.html': this.html
      },
      title: 'Dynamically Generated Project',
      description: 'Live playground for Array explorer',
      template: 'javascript',
      tags: ['array-explorer', 'stackblitz-sdk']
  };
    this.embedProjectOptions = {
      height: 620 ,
      width:1200
    }
    this.pgElement = this.elm.nativeElement as HTMLElement;
    this.pgElement.innerHTML = "";
    sdk.embedProject(this.pgElement, this.projectOptions, this.embedProjectOptions);
  }
  
}
