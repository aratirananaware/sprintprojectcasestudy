import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _productservice: ProductService,private _router:Router,private _cartservice:CartService) { }
 
  products: Array<Product> = new Array<Product>();
  ngOnInit(): void {

    this._productservice.getProducts().subscribe(res => this.products = res, err => console.log(err))
  }
  
    buy(item: any){
      this._cartservice.addtoCart(item);
    this._router.navigate(['/cart']);
  }
  
  
}