import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import ProductCard, {IProduct} from './ProductCard';
import SFLListTabBarCrash from '../styled/SFLListTabBarCrash';

const ProductList = ({products}: {products: IProduct[]}) => {
  const renderItem: ListRenderItem<IProduct> = ({item}) => (
    <ProductCard data={item} />
  );
  return (
    <SProductList
      ListFooterComponent={SFLListTabBarCrash}
      key={'_'}
      numColumns={2}
      data={products}
      renderItem={renderItem}
      keyExtractor={(item: IProduct) => item.id}
    />
  );
};

const SProductList = styled.FlatList``;

export default ProductList;
