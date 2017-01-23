import {Component, Input, EventEmitter, OnChanges, Output} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {CartService} from '../../services/cart-service';


@Component({// Main Menu Component
  selector: 'MainMenu',

  styleUrls: ['menu.component.css'],
  templateUrl: 'menu.component.html'
})

export class MenuComponent {

  private cart = []
  items: {};


  constructor(private cartService: CartService) {

  }

  addToCart(item) {
    this.items = this.cartService.getCart()
  }

}
