import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-photos',
  template: `
      <router-outlet></router-outlet>
  `,
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
