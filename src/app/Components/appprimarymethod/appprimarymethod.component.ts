import { Component, OnInit,Input } from '@angular/core';
import {defaultOptions} from '../../languages/defaultconfig'
@Component({
  selector: 'app-appprimarymethod',
  templateUrl: './appprimarymethod.component.html',
  styleUrls: ['./appprimarymethod.component.css']
})
export class AppprimarymethodComponent implements OnInit {

  options:any[] = [];
  @Input() selectedFilter:string = '';
  constructor() { 
    this.options = defaultOptions.primaryOptions;
  }

  ngOnInit() {
  }

}
