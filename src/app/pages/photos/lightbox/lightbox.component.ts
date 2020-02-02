import { Component, OnInit, Input } from '@angular/core';
import {Image} from "../../../@core/data/image";

@Component({
  selector: 'ngx-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit {

  @Input() image: Image;
  @Input() allImages: [Image];

  constructor() { }

  ngOnInit() {
    console.log(this.image)
  }

}
