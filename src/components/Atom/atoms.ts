import {atom} from 'recoil';
import {IProduct} from '../products/ProductCard';

export interface ICartInfo {
  id: string;
  userId: string;
  cartproducts: ICartProduct[];
}
export interface ICartProduct {
  id: string;
  cartId: string;
  productId: string;
  amount: number;
  product: IProduct;
}

export const isLoadingSomething = atom<boolean>({
  key: 'isLoadingSth',
  default: false,
});
