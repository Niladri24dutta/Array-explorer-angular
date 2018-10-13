import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showUsage:boolean = false;
  
  constructor(private translate: TranslateService) {
    //let language =  window.navigator.language; 
    this.translate.setDefaultLang('en');
  }

}
