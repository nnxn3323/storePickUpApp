import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import ProductCard, {IProduct} from './ProductCard';
import ProductOrderCard from './ProductOrderCard';
import {ICartInfo, ICartProduct} from '../Atom/atoms';
import {SText} from '../styled/stext';
import {useRecoilState} from 'recoil';
import SFLListTabBarCrash from '../styled/SFLListTabBarCrash';

const ProductList = ({products, tot}: {products: ICartInfo; tot: number}) => {
  const renderItem: ListRenderItem<ICartProduct> = ({item}) => (
    <ProductOrderCard data={item} />
  );
  return (
    <SProductList
      ListFooterComponent={
        <>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTopWidth: 0.2,
              borderColor: '#b2b2b2',
              marginTop: 8,
              marginHorizontal: 4,
              padding: 12,
            }}>
            <View>
              <SText textWeight={600} textSize={24}>
                결제금액
              </SText>
            </View>
            <View>
              <SText textWeight={600} textSize={24}>
                {tot}원
              </SText>
            </View>
          </View>
          <SFLListTabBarCrash height={72} />
        </>
      }
      key={'_'}
      data={products.cartproducts}
      renderItem={renderItem}
      keyExtractor={(item: IProduct) => item.id}
    />
  );
};

const SProductList = styled.FlatList`
  flex-grow: 0;
  width: 100%;
`;

export default ProductList;
