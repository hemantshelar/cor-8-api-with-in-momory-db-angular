import { Injectable } from '@angular/core';
import { Article } from '../StoresdbModels/Article';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { appSettings } from '../Models/AppSettings';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  baseUrl: string = "";

  constructor(private http: HttpClient) {
    this.baseUrl = appSettings.storesApi;
   }

  saveArticle(newArticle: Article): Observable<any>{

    var endopoint = `${this.baseUrl}\article`
    return  this.http.post(appSettings.storesApi,newArticle);
  }
}
