import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sample1Component } from './sample1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Sample1Component],
  exports: [Sample1Component]
})
export class Sample1Module { }
