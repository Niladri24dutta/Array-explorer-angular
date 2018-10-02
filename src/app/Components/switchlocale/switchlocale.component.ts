import { Component, OnInit } from '@angular/core';
import {locales} from '../../languages/locale'
import { TranslateService } from '@ngx-translate/core';
import {MessageService} from '../../services/message.service'

@Component({
  selector: 'app-switchlocale',
  templateUrl: './switchlocale.component.html',
  styleUrls: ['./switchlocale.component.css']
})
export class SwitchlocaleComponent implements OnInit {

  languages:any[] = [];
  selectedLanguage:string = 'en';
  constructor(private translate: TranslateService,private msgService:MessageService) { 
    this.languages = locales;
  }
  
  ngOnInit() {
  }

  changeDefaultLanguage(evt:any){
    let currentLanguage = evt.target.value;
    console.log(currentLanguage);
    this.translate.use(currentLanguage);
    this.msgService.resetLocale('');
  }

  clearMessage():void{
    this.msgService.clearResetValue();
  }
}
