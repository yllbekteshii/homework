import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = environment.apiUrl
constructor(private _http:HttpClient) { }

getProducts(){
  return this._http.get(this.apiUrl+'api/products',)
}
}
