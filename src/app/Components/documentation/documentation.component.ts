import { Component, OnInit,Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  @Input() urlPath:string = '';
  @Input() desc:string = '';
  constructor(private service:TranslateService) { 
  }

  ngOnInit() {
    
  }

}
