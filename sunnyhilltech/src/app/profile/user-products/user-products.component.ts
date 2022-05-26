import { Component, OnInit } from '@angular/core';
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

  constructor(private _products:ProductsService) { }
  
  products:Products[]=[];
  ngOnInit() {
    this._products.getProducts().subscribe((res:any)=>{
      console.warn(res)
      this.products = res
    })
  }

}
