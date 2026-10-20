import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../state/product/product';
import { ProductActions } from '../state/product/product.action';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  private readonly store = inject(Store);
  products = this.store.selectSignal((state) => state.products);

  addToCart(product: Product) {
    this.store.dispatch(ProductActions.addToCart({ product }));
  }

  removeFromCart(productId: number) {
    this.store.dispatch(ProductActions.removeFromCart({ productId }));
  }
}
