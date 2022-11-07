import {View, Text, Image} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {SText} from '../styled/stext';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
export interface IProduct {
  name: string;
  stock: number;
  price: number;
  id: string;
  imageUrl: string;
}
export type RootStackParamList = {
  ProductInfo: {data: IProduct};
};
const ProductCard = ({data}: {data: IProduct}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SProductCard
      onPress={() => {
        navigation.navigate('ProductInfo', {data});
      }}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={{uri: data.imageUrl}}
          style={{width: '100%', aspectRatio: 1}}
        />
      </View>
      <View
        style={{
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: 8,
        }}>
        <SText textWeight={600} textSize={24}>
          {data.name}
        </SText>
        <SText textWeight={600} textSize={16}>
          {data.price?.toString()}원
        </SText>
      </View>
    </SProductCard>
  );
};
export const SProductCard = styled.TouchableOpacity`
  width: 100%;
  flex: 0.5;
  justify-content: space-between;
  background-color: white;
`;
export default ProductCard;
