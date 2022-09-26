import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { BehaviorSubject, Observable } from 'rxjs';
import { Products } from '../user-products.component';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = environment.apiUrl
  cartItemList:any = []
  productList = new BehaviorSubject<any>([]);


constructor(private _http:HttpClient) { }
 
gettProducts(){
  return this.productList.asObservable()
}

setProduct(product:any)
{
  this.cartItemList.push(...product)
  this.productList.next(product)
}

addToCart(product:any)
{
  this.cartItemList.push(product)
  this.productList.next(this.cartItemList)
  this.getTotalPrice()
  console.log(this.cartItemList)
} 

getTotalPrice(){
  let grandTotal = 0;
  this.cartItemList.map((a:any)=>{
    grandTotal += a.price;
    console.log(a.price)
    console.log(grandTotal)
  })
}
removeCartItem(product:any){
  this.cartItemList.map((a:any,index:any)=>{

    if(product.id === a.id)
    {
       this.cartItemList.splice(index,1);
    }
  })
}
removeAll(){
  this.cartItemList = []
  this.productList.next(this.cartItemList);
}

  //Return list of the products
getProducts():Observable<Products[]>{
  return this._http.get<Products[]>(this.apiUrl+'api/products',)
}
}
