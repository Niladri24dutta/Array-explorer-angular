import { Component, OnInit } from '@angular/core';
import {locales} from '../languages/locale'
@Component({
  selector: 'app-switchlocale',
  templateUrl: './switchlocale.component.html',
  styleUrls: ['./switchlocale.component.css']
})
export class SwitchlocaleComponent implements OnInit {

  languages:any[] = [];
  selectedLanguage:string = 'en';
  constructor() { 
    this.languages = locales;
  }
  
  ngOnInit() {
  }

}
