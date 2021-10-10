import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FetchChecksComponent} from './fetchChecks/fetchChecks.component';
import { SuccessComponent}  from './success/success.component';
import {ApiService} from './api.service';
@NgModule({
  declarations: [
    AppComponent,
    FetchChecksComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
