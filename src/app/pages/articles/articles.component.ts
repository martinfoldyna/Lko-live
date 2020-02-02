import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import {ArticlesService} from "./articles.service";
import {NbWindowService, NbDialogService, NbToastrService} from "@nebular/theme";
import {WindowEditComponent} from "./window-edit/window-edit.component";

@Component({
  selector: 'ngx-articles',
  templateUrl: 'articles.component.html',
  styleUrls: ['articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;
  @ViewChild('disabledEsc', { read: TemplateRef, static: true }) disabledEscTemplate: TemplateRef<HTMLElement>;

  public article;
  public allArticles;

  articlesLoaded: Promise<boolean>;
  loadingMediumGroup
  fetchingData = false;
  deletingArticle = false;
  flipped = false;
  trashStatus = "danger";

  constructor(
    private toaster: NbToastrService,
    private articlesService: ArticlesService,
    private windowService: NbWindowService,
    private dialogService: NbDialogService
  ) {
    this.article = {
      title: "",
      body: "obsah"
    }
    this.loadArticles()
  }

  ngOnInit() {

  }

  editArticle(article) {
    this.dialogService.open(WindowEditComponent, {context: {article: article}}).onClose.subscribe(() => this.loadArticles());


  }

  loadArticles() {
    this.articlesService.loadArticles().subscribe(articles => {
      this.allArticles = articles;
      console.log(this.allArticles);

      this.articlesLoaded = Promise.resolve(true);
    }, err => {
      console.log(err);
    })
  }

  toggleLoadingMediumGroupAnimation() {
    this.loadingMediumGroup = true;

    setTimeout(() => this.loadingMediumGroup = false, 3000);
  }

  upload(textArea) {
    this.fetchingData = true;
    this.article.body = textArea.value;
    console.log(this.article.body);
    this.articlesService.addArticle(this.article).subscribe(data => {
      console.log(data);
      if(data) {
        this.fetchingData = false;
        this.loadArticles();
        console.log('here');
      }
    }, err => {
      console.log(err);
      this.fetchingData = false;
    })
  }

  deleteArticle(articleId, articleTitle) {
    this.deletingArticle = true;
    this.articlesService.deleteArticle(articleId).subscribe(data => {
      this.deletingArticle = false;
      this.toaster.success(`Příspěvek ${articleTitle} byl smazán.`, 'Upozornění')
      console.log(data);
      this.loadArticles();

    })
  }
}
