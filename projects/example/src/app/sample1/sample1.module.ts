import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sample1Component } from './sample1.component';
import { Sample1Service } from './sample1.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [Sample1Service],
  declarations: [Sample1Component],
  exports: [Sample1Component]
})
export class Sample1Module { }
