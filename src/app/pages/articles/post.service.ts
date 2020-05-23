import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {SinglePostResponse, MultiplePostResponse} from "../../@core/data/post";
import {Config} from "../../../conf";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  addArticle(data, headers, subject?: String): Observable<SinglePostResponse> {
    return this.http.post<SinglePostResponse>(`${Config.apiUrl}post/add/${subject}`, data);
  }

  loadArticles(subject?: String): Observable<MultiplePostResponse> {
    return this.http.get<MultiplePostResponse>(`${Config.apiUrl}post/load/${subject}`);
  }

  deleteArticle(articleId) {
    return this.http.post(`${Config.apiUrl}post/delete/${articleId}`, {});
  }

  updateArticle(article) {
    return this.http.post(`${Config.apiUrl}post/update/${article._id}`, article)
  }
}
