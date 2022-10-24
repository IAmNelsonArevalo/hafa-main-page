import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Components */
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { PopupComponent } from './popup/popup.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  exports: [InputComponent, ButtonComponent, PopupComponent, HeaderComponent],
  declarations: [
    InputComponent,
    ButtonComponent,
    PopupComponent,
    HeaderComponent,
  ],
  imports: [CommonModule],
})
export class ComponentsModule {}
