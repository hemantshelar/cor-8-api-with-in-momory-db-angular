import { Injectable } from '@angular/core';
import { Article } from '../StoresdbModels/Article';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { appSettings } from '../Models/AppSettings';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  saveArticle(newArticle: Article): Observable<any>{
    return  this.http.post(appSettings.storesApi,newArticle);
  }
}
