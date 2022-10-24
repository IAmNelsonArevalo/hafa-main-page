import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** Components */
import {LoginComponent} from "./login/login.component";
import { ComponentsModule } from '../components/components.module';


@NgModule({
  exports: [
    LoginComponent
  ],
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class LocalComponentsModule { }
