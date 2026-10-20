import { createActionGroup, props } from '@ngrx/store';
import { Product } from './product';

export const ProductActions = createActionGroup({
  source: 'Products',
  events: {
    'Add To Cart': props<{ product: Product }>(),
    'Remove From Cart': props<{ productId: number }>(),
  },
});
