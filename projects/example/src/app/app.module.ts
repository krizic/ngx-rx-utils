import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Sample1Module } from './sample1/sample1.module';
import { NgxRxUtilsModule } from 'ngx-rx-utils';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Sample1Module,
    NgxRxUtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
