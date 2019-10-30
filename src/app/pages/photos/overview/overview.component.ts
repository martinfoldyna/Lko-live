import { Component, OnInit } from '@angular/core';
import {PhotosService} from "../photos.service";

@Component({
  selector: 'ngx-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(
    private photoService: PhotosService
  ) { }

  ngOnInit() {
    this.photoService.download().subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    })
  }

}
