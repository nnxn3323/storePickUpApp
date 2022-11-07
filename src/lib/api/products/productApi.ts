import {IProduct} from '../../../components/products/ProductCard';
import {fetchClient} from '../../client';

export const GetAllProducts = async (): Promise<{products: IProduct[]}> => {
  const FetchedData = await fetchClient.get<{products: IProduct[]}>(
    '/api/products/all',
  );
  return {products: FetchedData.data.products};
};
