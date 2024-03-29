import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/_helpers/auth.service';
import { environment } from 'environments/environment.prod';
import { ProductsService } from './_helpers/products.service';
 export interface Products {
  id:number,
  title:string,
  price:number,
  category:string,
  description:string;
  image:string,
}
@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent implements OnInit {
 
  apiUrl = environment.apiUrl
  totalCount:number = 0
  constructor(private _products:ProductsService,private _http:HttpClient,private _route:Router,
    private _auth: AuthService) { }
  
  products:Products[]=[];
  
  ngOnInit() {
    debugger
    this._products.getProducts().subscribe((res:Products[])=>{
      console.log(res)
      this.products = res
      this.products.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      })
    })

    this._products.gettProducts().subscribe(res=>{
      this.totalCount = res.length
    })

  }

  //Destroy token and log out
  logOut(){
    return this._http.post(this.apiUrl+'api/user/logout',localStorage.getItem('token')).subscribe(res=>{
      this._auth.signOut();
      this._route.navigate(['/log-in'])
    },err=>{
      this._auth.signOut();
      this._route.navigate(['/log-in'])
    })
  }

  addItemtoCart(item:any ){
    this._products.addToCart(item);
  }

}
