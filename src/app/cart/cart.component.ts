import {Component} from '@angular/core';
import {CartService} from '../services/cart-service';

@Component({// Cart component is for Main Cart View
  selector: 'Cart',
  styleUrls: ['cart.component.css'],
  templateUrl: 'cart.component.html',


})

export class CartComponent { 

  items = []


  constructor(private cart: CartService) {
    this.items = this.cart.getCart()
  }



}
