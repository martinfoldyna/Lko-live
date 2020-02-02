import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-drawings',
  templateUrl: './drawings.component.html',
  styleUrls: ['./drawings.component.scss']
})
export class DrawingsComponent implements OnInit {
  subject = "STR";

  constructor() { }

  ngOnInit() {
  }

}
