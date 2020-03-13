import { Component, OnInit, Input } from '@angular/core';
import {Subject} from "../../../@core/data/subject";
import {PostService} from "../post.service";
import {WindowEditComponent} from "../window-edit/window-edit.component";
import {NbDialogService, NbToastrService} from "@nebular/theme";
import {GeneralService} from "../../../@core/utils/general.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'ngx-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  allArticles;
  @Input() subject: String;
  @Input() loadNewArticles: boolean;

  articlesLoaded: Promise<boolean>;
  deletingArticle = false;

  constructor(
    private articlesService: PostService,
    private dialogService: NbDialogService,
    private generalService: GeneralService,
    private toastr: NbToastrService,

  ) {
  }

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles() {
    if(!this.subject) {
      this.subject = "all";
    }

    this.articlesService.loadArticles(this.subject).subscribe(data => {
      if(!data.post) console.log('Ooops');
      this.allArticles = data.post.filter(article => {
        if(article.subject !== "undefined") {
          return false;
        } else {
          return true;
        }
      });
      this.articlesLoaded = Promise.resolve(true);
    })
  }

  editArticle(article) {
    this.dialogService.open(WindowEditComponent, {context: {article: article}}).onClose.subscribe(() => this.loadArticles());
  }

  deleteArticle(articleId) {
    this.deletingArticle = true;
    this.generalService.delete(environment.models.article, articleId).subscribe(data => {
      this.deletingArticle = false;
      this.toastr.success('', data.code.message );
      this.loadArticles();
    }, err => {
      this.toastr.danger(err.error, 'Problém!')
    })
  }


}
