import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './views/screens/checkout/checkout.component';
/** Screens */
import { HomeComponent } from './views/screens/home/home.component';
import { PreviewComponent } from './views/screens/preview/preview.component';
import { ProductDetailComponent } from "./views/screens/product-detail/product-detail.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product/detail',
    component: ProductDetailComponent
  },
  {
    path: "preview",
    component: PreviewComponent
  },
  {
    path: "checkout",
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
