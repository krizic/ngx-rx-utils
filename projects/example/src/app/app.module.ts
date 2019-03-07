import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Sample1Module } from './sample1/sample1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Sample1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
