import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { CollegueFormComponent } from './collegue-form-component/collegue-form-component.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { HttpClient } from '@angular/common/http/src/client';
import { HttpClientModule } from '@angular/common/http';

import { CollegueService } from './shared/service/collegue.service';



@NgModule({
  declarations: [
    AppComponent,
    CollegueFormComponent,
    UnCollegueComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(), //integre le module NgbModule
    HttpClientModule
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
