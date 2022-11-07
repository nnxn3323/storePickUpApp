import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import ProductList from '../components/products/ProductList';
import {IProduct} from '../components/products/ProductCard';
import {SContainer} from '../components/styled/SContainter';
import SHeader from '../components/headers/OrderHeader';
import {GetAllProducts} from '../lib/api/products/productApi';
import Loader from '../components/Loading/Loader';
import {useQuery} from '@tanstack/react-query';

const ProductListScreen = () => {
  const {data, isLoading, error} = useQuery({
    queryKey: ['/api/products'],
    queryFn: GetAllProducts,
  });
  return (
    <SContainer>
      <SafeAreaView>
        <SHeader title="상품목록" />
        {!data ? <Loader /> : <ProductList products={data?.products} />}
      </SafeAreaView>
    </SContainer>
  );
};

export default ProductListScreen;
