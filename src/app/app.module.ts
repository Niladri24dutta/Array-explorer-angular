import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import {TeximateModule} from "ng-teximate";
import { AppComponent } from './app.component';
import { GithubRepoComponent } from './components/github-repo/github-repo.component';
import { SwitchlocaleComponent } from './components/switchlocale/switchlocale.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { ClipboardModule } from 'ngx-clipboard';
import {GrowlModule} from 'primeng/growl';
import {ButtonModule} from 'primeng/button';
import {MessageService} from 'primeng/components/common/messageservice';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { UsageComponent } from './components/usage/usage.component';
import {MessagesService} from './services/message.service';
import {NotificationService} from './services/notification.service';
import { AppprimarymethodComponent } from './components/appprimarymethod/appprimarymethod.component';
import { SelectedmethodComponent } from './components/selectedmethod/selectedmethod.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { StackblitzSampleComponent } from './components/stackblitz-sample/stackblitz-sample.component';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    GithubRepoComponent,
    SwitchlocaleComponent,
    UsageComponent,
    AppprimarymethodComponent,
    SelectedmethodComponent,
    DocumentationComponent,
    StackblitzSampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TeximateModule,
    HttpClientModule,
    ReactiveFormsModule,
    ClipboardModule,
    GrowlModule,
    ButtonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
    }
    })
  ],
  providers: [MessagesService,NotificationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
