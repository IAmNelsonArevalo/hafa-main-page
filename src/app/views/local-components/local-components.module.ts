import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** Components */
import {LoginComponent} from "./login/login.component";
import { ComponentsModule } from '../components/components.module';
import { ProductCardComponent } from './product-card/product-card.component';


@NgModule({
  exports: [
    LoginComponent,
    ProductCardComponent
  ],
  declarations: [
    LoginComponent,
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class LocalComponentsModule { }
