import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import {TeximateModule} from "ng-teximate";
import { AppComponent } from './app.component';
import { GithubRepoComponent } from './components/github-repo/github-repo.component';
import { SwitchlocaleComponent } from './components/switchlocale/switchlocale.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { UsageComponent } from './components/usage/usage.component';
import {MessageService} from './services/message.service';
import { AppprimarymethodComponent } from './components/appprimarymethod/appprimarymethod.component'

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    GithubRepoComponent,
    SwitchlocaleComponent,
    UsageComponent,
    AppprimarymethodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TeximateModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
    }
    })
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
