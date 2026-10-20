import { Product } from '../product/product';

export interface Cart {
  product: Product;
  cartQuantity: number;
}
