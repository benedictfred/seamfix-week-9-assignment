import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductActions } from '../state/product/product.action';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  private readonly store = inject(Store);
  cartItems = this.store.selectSignal((state) => state.cart);

  removeFromCart(productId: number) {
    this.store.dispatch(ProductActions.removeFromCart({ productId }));
  }
}
