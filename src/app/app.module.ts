import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {DecimalPipe} from '@angular/common';


import { AppComponent } from './app.component';
import { NumberFrenchFormatPipe } from './number-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
      NumberFrenchFormatPipe
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
