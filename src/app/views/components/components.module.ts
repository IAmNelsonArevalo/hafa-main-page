import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Components */
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  exports: [InputComponent, ButtonComponent],
  declarations: [InputComponent, ButtonComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
