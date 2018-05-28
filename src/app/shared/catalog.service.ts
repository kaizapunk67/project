import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Details} from './details'
@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http:HttpClient) { }
  
  getdetails():Observable<Details>{
    return this.http.get<Details>('http://localhost:7070/api/catalogs');
  }
}
