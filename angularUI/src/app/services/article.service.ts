import { Injectable } from '@angular/core';
import { Article } from '../StoresdbModels/Article';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { appSettings } from '../Models/AppSettings';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
   }

  saveArticle(newArticle: Article): Observable<any>{
    var endopoint = `${environment.storesAPI}/articles`
    return  this.http.post(endopoint,newArticle);
  }

  getArticles(): Observable<any>{
    var endopoint = `${environment.storesAPI}/articles`
    return  this.http.get(endopoint);
  }
}
