import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Components */
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { PopupComponent } from './popup/popup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
    exports: [
        InputComponent,
        ButtonComponent,
        PopupComponent,
        HeaderComponent,
        FooterComponent,
        BreadcrumbsComponent
    ],
    declarations: [
        InputComponent,
        ButtonComponent,
        PopupComponent,
        HeaderComponent,
        FooterComponent,
        BreadcrumbsComponent,
    ],
    imports: [CommonModule, CarouselModule, StarRatingModule.forRoot()],
})
export class ComponentsModule {}
