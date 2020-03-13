import { Component, OnInit, Input } from '@angular/core';
import {NbDialogRef, NbDialogService} from "@nebular/theme";
import {Image} from "../../../@core/data/image";

@Component({
  selector: 'ngx-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit {

  @Input() image: Image;
  @Input() allImages: [Image];
  @Input() fromSlider: boolean;

  constructor(
    protected dialogRef: NbDialogRef<LightboxComponent>,
  ) { }

  ngOnInit() {
    console.log(this.image)
  }

  close() {
    this.dialogRef.close()
  }

}
