import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hafa-main-page';

  isFunction(): void {
    console.log("Hola Hola");
  }
}
