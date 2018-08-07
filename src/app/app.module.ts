// angular core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {APIRequestInterceptor} from './http-interceptors/api-request.interceptor';


// view and routing
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import {ViewsModule} from "./views/module"; 
import {NotificationDialogComponent} from './notification-dialog/notification-dialog.component'

// material modules
import {MatToolbarModule, MatButtonModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NotificationDialogComponent
  ],
  entryComponents: [
    NotificationDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    ViewsModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: APIRequestInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
