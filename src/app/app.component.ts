import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showUsage:boolean = false;
  msgs: Message[] = [];
  
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

}
