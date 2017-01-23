import {Component, Input} from '@angular/core';
import {CartService} from '../../services/cart-service';


@Component({// This component will list all the product listing template
  selector: 'productlisting',
  template: `
          <div class="product-item">
            <div class="product-img">
              <a href="index.html">
                <img src="{{item.image}}" alt="" >
              </a>
              <div class="product-label" *ngIf="item.sale != null">
                <span class="sale" >{{percentageCalculator(item.sale,item.price)}}% OFF</span>
              </div>
                <span class="sold-out valign" *ngIf="item.out_of_stock">out of stock</span>
              <div class="product-actions">
                <a (click)='addToCart(item)' class="product-add-to-wishlist" data-toggle="tooltip" data-placement="bottom"
                   title="Add to Cart" *ngIf="!item.out_of_stock">
                  <i class="fa fa-cart-plus"></i>
                </a>
              </div>
              <a href="index.html#" class="product-quickview">Quick View</a>
            </div>
            <div class="product-details">
              <h3>
                <a class="product-title" href="shop-single-product.html">{{item.brand_name}}</a>
              </h3>
               <span class="price" *ngIf="item.sale != null">
                  <del>
                    <span >{{item.price | currency:'USD':'$'}}</span>
                  </del>
                  <ins>
                    <span class="ammount">{{item.sale | currency:'USD':'$'}}</span>
                  </ins>
                </span>
                
                 <span class="price" *ngIf="item.sale == null">
                  <ins>
                    <span class="ammount">{{item.price | currency:'USD':'$'}}</span>
                  </ins>
                </span>
            </div>
          </div>
       `,
})

export class ListingComponent {
  @Input() item: any

  items = [];
  total = 0;

  constructor(private cartService: CartService) {
    this.items = this.cartService.getCart()

  }

  addToCart(item) {
    this.cartService.add(item)
  }

  percentageCalculator(sale, price) {
    var sum = 0;
    var differnce = price - sale;
    if (sale == null) {
      return null;
    }
    sum = Math.round(differnce / price * 100);

    return sum;
  }

}


