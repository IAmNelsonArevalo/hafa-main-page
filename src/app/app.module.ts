import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StarRatingModule } from 'angular-star-rating';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './views/components/components.module';
import { LocalComponentsModule } from './views/local-components/local-components.module';
import { ProductDetailComponent } from './views/screens/product-detail/product-detail.component';
import { IonicModule } from '@ionic/angular';
import { PreviewComponent } from './views/screens/preview/preview.component';
import { CheckoutComponent } from './views/screens/checkout/checkout.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    PreviewComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule,
    LocalComponentsModule,
    StarRatingModule.forRoot(),
    IonicModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
