import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import {Input} from '@angular/core';
import {ArticlesService} from '../articles.service';

@Component({
  templateUrl: 'window-edit.component.html',
  styleUrls: ['window-edit.component.scss'],
})
export class WindowEditComponent implements OnInit{
  @Input() article: any;

  newArticle;
  articleWasUpdated = false;
  constructor(
    private dialogRef: NbDialogRef<WindowEditComponent>,
    private articlesService: ArticlesService,
  ) {

  }

  fetchingData = false;

  ngOnInit() {
    this.newArticle = {
      _id: this.article._id,
      title: this.article.title,
      body: this.article.body,
    };
  }

  close() {
    this.dialogRef.close();
  }

  onKeyUp(textarea?) {
    console.log(this.newArticle.body);
    this.articleWasUpdated = (this.newArticle.title !== this.article.title || textarea.value !== this.article.body);
    if(textarea) this.newArticle.body = textarea.value;

  }

  edit(textArea) {
    this.fetchingData = true;
    console.log('waay');
    this.newArticle.body = textArea.value;
    this.articlesService.updateArticle(this.newArticle).subscribe(data => {
      console.log(data);
      if (data) {
        this.fetchingData = false;
        console.log('here');
        this.dialogRef.close(true);
      }
    }, err => {
      console.log(err);
      this.fetchingData = false;
      this.dialogRef.close(false);
    });
  }
}
