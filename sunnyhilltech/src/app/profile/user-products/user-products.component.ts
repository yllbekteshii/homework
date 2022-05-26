import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { ProductsService } from './_helpers/products.service';
interface Products {
  id:number,
  name:string,
  price:number,
  category:string,
  image:string,
}
@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent implements OnInit {
 
  apiUrl = environment.apiUrl
  constructor(private _products:ProductsService,private _http:HttpClient,private _route:Router) { }
  
  products:Products[]=[];
  ngOnInit() {
    this._products.getProducts().subscribe((res:any)=>{
      console.warn(res)
      this.products = res
    })
  }
  logOut(){
    this._route.navigate(["/log-in"])
    return this._http.post(this.apiUrl+'api/user/logout',localStorage.getItem('token'))
  }

}
