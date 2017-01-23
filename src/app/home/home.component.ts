import {Component} from '@angular/core';
import {productService} from '../services/all-products';
declare var jQuery: any;

@Component({// Home component is for Main Page where user lands
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
  providers: [productService],

})

export class HomeComponent {
  data: {}

  constructor(private product: productService) {

    let service = this.product.getAllProducts('./assets/data/all-products.json')

    service.subscribe(
      (data) => {
        this.data = data.products

      }
    );

  }


}
