import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appSettings } from '../Models/AppSettings';import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalesOrgService {

  constructor(private http: HttpClient) {
   }

  getSalesOrgs(): Observable<any> | undefined{
    var endpoint = `${environment.storesAPI}/salesorgs`
    var result ;
    try{
      result = this.http.get(endpoint);

    }catch(ex){
      console.log(ex);
    }
    return result;
  }
}
