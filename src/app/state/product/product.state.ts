import { createFeature, createReducer } from '@ngrx/store';
import { Product } from './product';

export const initialState: Product[] = [
  {
    id: 1,
    productName: 'Camera Pro',
    productPrice: '$150',
    productImagePath: 'product1.png',
    quantity: 1,
    rating: 4.5,
    category: 'Camera',
  },
  {
    id: 2,
    productName: 'Apple Watch',
    productPrice: '$300',
    productImagePath: 'product2.png',
    quantity: 2,
    rating: 4.8,
    category: 'Watch',
  },
];

export const productFeature = createFeature({
  name: 'products',
  reducer: createReducer(initialState),
});
