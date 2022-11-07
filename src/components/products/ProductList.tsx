import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  RefreshControl,
} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import ProductCard, {IProduct} from './ProductCard';
import SFLListTabBarCrash from '../styled/SFLListTabBarCrash';

const ProductList = ({
  products,
  refetch,
}: {
  products: IProduct[];
  refetch: any;
}) => {
  const [isRefreshing, setRefreshing] = useState<boolean>(false);
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
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={async () => {
            setRefreshing(true);
            await refetch();
            setRefreshing(false);
          }}
        />
      }
    />
  );
};

const SProductList = styled.FlatList``;

export default ProductList;
