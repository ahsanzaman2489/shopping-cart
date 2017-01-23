import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routes';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';


import {HomeComponent} from './home/home.component';
import {ShopComponent} from './shop/shop.component';
import {MenuComponent} from './common/Navigation/menu.component';
import {ListingComponent} from './common/listing/listing.component';
import {miniCartcomponent} from './common/cart/miniCart.component';
import {CartComponent} from './cart/cart.component';


import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {categoryPipe} from './pipes/categoryPipe';
import {FilterByPipe} from './pipes/filterPipe';
import {CartService} from './services/cart-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ListingComponent,
    categoryPipe,
    miniCartcomponent,
    CartComponent,
    ShopComponent,
    FilterByPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, {useHash: true})
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
