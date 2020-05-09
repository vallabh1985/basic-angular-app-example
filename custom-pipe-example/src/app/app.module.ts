import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {customPipe} from './custompipe';
import {customPipeWithParam} from './custompipewithparam';

@NgModule({
  declarations: [
    AppComponent,
    customPipe,
    customPipeWithParam
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
