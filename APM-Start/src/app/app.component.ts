import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div><h1>Hej och välkommen {{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>
    `
})
export class AppComponent {
  pageTitle: string = 'WaterPond Product Management';
}