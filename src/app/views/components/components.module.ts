import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Components */
import {InputComponent} from "./input/input.component";

@NgModule({
  exports: [
    InputComponent
  ],
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
