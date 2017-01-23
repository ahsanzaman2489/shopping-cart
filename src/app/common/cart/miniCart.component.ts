import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart-service';

@Component({ // Mini Cart component is for Mini Cart in the navigation
  selector: 'MiniCart',
  template: `  <div >
                <div class="nav-cart right">
                  <div class="nav-cart-outer">
                    <div class="nav-cart-inner">
                      <a class="nav-cart-icon">{{items.products.length}}</a>
                    </div>
                  </div>
                  <div class="nav-cart-container">
                  <div *ngIf="items.products.length == 0">Cart is empty</div>
                   <div *ngIf="items.products.length > 0"> <div class="nav-cart-items">

                      <div class="nav-cart-item clearfix" *ngFor="let item of items.products | slice:0:5">
                        <div class="nav-cart-img">
                          <a href="index.html#">
                            <img src="{{item.image}}" alt="">
                          </a>
                        </div>
                        <div class="nav-cart-title">
                          <a href="index.html#">
                            {{item.brand_name}}
                          </a>
                          <div class="nav-cart-price">
                            <span *ngIf="item.sale != null">{{item.sale | currency:'USD':'$'}}</span>
                            <span *ngIf="item.sale == null">{{item.price | currency:'USD':'$'}}</span>
                          </div>
                        </div>
                        <div class="nav-cart-remove" (click)="cart.delete(item)">
                          <a ><i class="fa-close fa" ></i></a>
                        </div>
                      </div>


                    </div> <!-- end cart items -->

                    <div class="nav-cart-summary">
                      <span>Cart Subtotal</span>
                      <span class="total-price">{{items.total | currency:'USD':'$'}}</span>
                    </div>

                    <div class="nav-cart-actions mt-20">
                      <a href="shop-cart.html" class="btn btn-md btn-dark" routerLink="/cart"><span>View Cart</span></a>
                     
                    </div></div>
                  </div>
                </div>
                <div class="menu-cart-amount right">
                      <span>
                        <a (click)="cart.clearCart()" style="color: #761c19;" *ngIf="items.products.length > 0">Clear /</a> 
                        <a> {{items.total | currency:'USD':'$'}}</a>
                      </span>
                </div>
              </div>`
})

export class miniCartcomponent {

  items = []

  constructor(private cart: CartService) {
    this.items = this.cart.getCart()
  }


}


