import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import {TeximateModule} from "ng-teximate";
import { AppComponent } from './app.component';
import { GithubRepoComponent } from './github-repo/github-repo.component';
import { SwitchlocaleComponent } from './switchlocale/switchlocale.component';


@NgModule({
  declarations: [
    AppComponent,
    GithubRepoComponent,
    SwitchlocaleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TeximateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
