import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appSettings } from '../Models/AppSettings';import { Observable } from 'rxjs';
import { SalesOrg } from '../Models/SalesOrg';

@Injectable({
  providedIn: 'root'
})
export class SalesOrgService {
  baseUrl: string = "";

  constructor(private http: HttpClient) {
    this.baseUrl = appSettings.storesApi;
   }

  getSalesOrgs(): Observable<any> | undefined{
    var endpoint = `${this.baseUrl}/salesorgs`
    var result ;
    try{
      result = this.http.get(endpoint);

    }catch(ex){
      console.log(ex);
    }
    return result;
  }
}
