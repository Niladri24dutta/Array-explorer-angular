import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-selectedmethod',
  templateUrl: './selectedmethod.component.html',
  styleUrls: ['./selectedmethod.component.css']
})
export class SelectedmethodComponent implements OnInit {

  @Input() methodType:string = ''
  constructor() { }

  ngOnInit() {
  }

}
