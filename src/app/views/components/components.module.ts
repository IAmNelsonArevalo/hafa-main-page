import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Components */
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  exports: [InputComponent, ButtonComponent, PopupComponent],
  declarations: [InputComponent, ButtonComponent, PopupComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
