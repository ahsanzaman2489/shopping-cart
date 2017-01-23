import {Component, Injectable} from '@angular/core';
declare var jQuery: any;


@Injectable()
export class CartService { // Cart service handle all basic task like add , delete , update on entire app
  private cart = [];
  private lCP = JSON.parse(localStorage.getItem("cart-product"))
  private lCT = JSON.parse(localStorage.getItem("cart-total"))

  constructor() {
    if (this.lCP != '' && this.lCP) {

      this.cart['products'] = this.lCP;
      this.cart['total'] = this.lCT;
      this.cart['shipping'] = {
        amount: 0,
      };

    }
    else {
      this.cart['total'] = 0;
      this.cart['products'] = [];
      this.cart['shipping'] = {
        amount: 0,
      };
    }

  }

  getCart() {
    return this.cart;

  }

  add(item) {
    if (this.cart['products'].indexOf(item) == -1) {
      this.addTotal(item.sale == null ? item.price : item.sale);
      this.cart['products'].push(item);
      jQuery.notify(item.brand_name + " is added to cart", {
        autoHideDelay: 1500,
        className: 'success',
        globalPosition: 'top left'
      });
      this.updateCart()
    }
    else {
      jQuery.notify(item.brand_name + " is already in cart", {
        autoHideDelay: 1500,
        className: 'success',
        globalPosition: 'top left'
      });
    }

  }

  delete(item) {
    var index = this.cart['products'].indexOf(item);
    this.cart['products'].splice(index, 1);
    this.removeTotal((item.sale != null ? item.sale : item.price) * item.qty)
    jQuery.notify(item.brand_name + " is removed from cart", {
      autoHideDelay: 1500,
      className: 'warn',
      globalPosition: 'top left'

    });
    this.updateCart()
  }

  updateCart() {

    localStorage.setItem("cart-product", JSON.stringify(this.cart['products']));
    localStorage.setItem("cart-total", JSON.stringify(this.cart['total']));
  }

  clearCart() {
    this.cart['products'] = [];
    this.cart['total'] = 0;
    localStorage.removeItem('cart-product')
    localStorage.removeItem('cart-total')
    jQuery.notify("cart is clear now", {
      autoHideDelay: 1500,
      className: 'error',
      globalPosition: 'top left'
    });

  }

  addTotal(price) {
    console.log(price)
    this.cart['total'] = this.cart['total'] + price;
  }

  removeTotal(price) {
    console.log(price)
    this.cart['total'] = this.cart['total'] - price;
  }

  upQuantity(item) {
    this.addTotal(item.sale != null ? item.sale : item.price)
    item.qty++;
    this.updateCart()
  }

  downQuantity(item) {
    if (item.qty == 1) {

      return
    }
    item.qty--;
    this.removeTotal(item.sale != null ? item.sale : item.price)
    this.updateCart()
  }

  ShippingCaculator(country) {
    let percent = parseInt(country.target.value);
    const selectedCountry = country.target.selectedOptions[0].innerHTML;
    if (isNaN(percent)) {
      this.cart['shipping'] = {
        selectedCountry: '',
        amount: 0,
        percent: 0,
      }
      return;
    }

    let amount = 0;
    amount = percent * this.cart['total'] / 100,

      this.cart['shipping'] = {
        selectedCountry,
        amount,
        percent
      }
    console.log(this.cart)


  }

}
