import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Products } from '../user-products.component';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = environment.apiUrl
constructor(private _http:HttpClient) { }

  //Return list of the products
getProducts():Observable<Products[]>{
  return this._http.get<Products[]>(this.apiUrl+'api/products',)
}
}
