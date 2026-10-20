import { createFeature, createReducer, on } from '@ngrx/store';
import { Cart } from './cart';
import { ProductActions } from '../product/product.action';

export const initialState: Cart[] = [];

export const cartFeature = createFeature({
  name: 'cart',
  reducer: createReducer(
    initialState,
    on(ProductActions.addToCart, (state, { product }) => {
      const productAlreadyExists = state.find((cart) => cart.product.id === product.id);
      if (productAlreadyExists) {
        return [
          ...state.map((cart) =>
            cart.product.id === product.id
              ? { ...cart, product, cartQuantity: productAlreadyExists.cartQuantity + 1 }
              : cart,
          ),
        ];
      } else {
        return [...state, { product: product, cartQuantity: 1 }];
      }
    }),
    on(ProductActions.removeFromCart, (state, { productId }) =>
      state.filter((cart) => cart.product.id !== productId),
    ),
  ),
});
