import {Component} from '@angular/core';
import {ActivatedRoute, Router, NavigationStart} from '@angular/router';
import {productService} from '../services/all-products';
import {filter} from "rxjs/operator/filter";

@Component({// Main Shop Component where we can saw different categoris based on data
  selector: 'home',
  templateUrl: 'shop.component.html',
  providers: [productService],

})

export class ShopComponent {
  category = {
    women: 1,
    men: 2,
  };
  selectedCategory: any;
  data: {};
  search;

  constructor(private route: ActivatedRoute, private products: productService, private Router: Router) {
    let service = this.products.getAllProducts('./assets/data/all-products.json')

    service.subscribe(
      (data) => {
        this.data = data.products;
      }
    );

    this.Router.events.subscribe(() => {
      this.selectedCategory = route.snapshot.params['category']
      for (var category in this.category) {
        if (this.selectedCategory == category) {
          this.selectedCategory = this.category[this.selectedCategory]
        }
      }
    })


  }


}
