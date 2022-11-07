import {ICartInfo} from '../../../components/Atom/atoms';
import {IProduct} from '../../../components/products/ProductCard';
import {fetchClient} from '../../client';

export const GetCart = async (): Promise<{cart: ICartInfo}> => {
  const FetchedData = await fetchClient.get<{cart: ICartInfo}>('/api/cart');
  return {cart: FetchedData.data.cart};
};
export const AddToCart = async ({
  productId,
  amount,
}: {
  productId: string;
  amount: number;
}): Promise<{cart: ICartInfo}> => {
  const FetchedData = await fetchClient.post<{cart: ICartInfo}>(
    '/api/cart/add',
    {
      productId,
      amount,
    },
  );
  return {cart: FetchedData.data.cart};
};
export const RemoveFromCart = async ({
  productId,
}: {
  productId: string;
}): Promise<{cart: ICartInfo}> => {
  const FetchedData = await fetchClient.post<{cart: ICartInfo}>(
    '/api/cart/remove',
    {
      productId,
    },
  );
  return {cart: FetchedData.data.cart};
};
