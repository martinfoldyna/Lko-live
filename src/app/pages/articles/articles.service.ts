import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Article} from "../../@core/data/article";


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private http: HttpClient
  ) { }

  addArticle(data): Observable<Article> {
    return this.http.post<Article>(`${environment.apiUrl}articles/add`, data);
  }

  loadArticles(subject?: String): Observable<Article> {
    return this.http.get<Article>(`${environment.apiUrl}articles/load/${subject}`);
  }

  deleteArticle(articleId) {
    return this.http.post(`${environment.apiUrl}articles/delete/${articleId}`, {});
  }

  updateArticle(article) {
    return this.http.post(`${environment.apiUrl}articles/update/${article._id}`, article)
  }
}
