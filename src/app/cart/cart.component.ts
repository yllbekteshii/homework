import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'app/profile/user-products/_helpers/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  public product : any = [];
  public total !: number
  columndefs : any[] = ['name','Image','Category','Price','Quantity','Total'];

  constructor(private cartService:ProductsService) { }


  ngOnInit() {
    this.cartService.gettProducts()
    .subscribe(res=>{
      console.warn(res)
      this.product = res
      this.total = this.cartService.getTotalPrice();
    })
  }
  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }

  emptyCart(){
    this.cartService.removeAll();
  }

}
