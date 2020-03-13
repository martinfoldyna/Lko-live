import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Vytvořil Martin Foldyna, Design: <b><a href="https://akveo.com" target="_blank">Akveo</a></b> 2020</span>
  `,
})
export class FooterComponent {
}
