import {View, Text, Image, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {SText} from '../styled/stext';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NumberCounter from '../Counter/NumberCounter';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {ICartInfo, ICartProduct, isLoadingSomething} from '../Atom/atoms';
import {useRecoilState, useRecoilValue} from 'recoil';
import {IProduct} from './ProductCard';
import {GetCart, RemoveFromCart} from '../../lib/api/cart/cartApi';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import {queryClient} from '../../../App';
export interface IProductInfo {
  name: string;
  amount: number;
  price: number;
  id: string;
  url: string;
}
type RootStackParamList = {
  ProductInfo: {data: IProduct};
};
const ProductOrderCard = ({data}: {data: ICartProduct}) => {
  // const {
  //   data: _,
  //   isLoading,
  //   error,

  // } = useQuery({
  //   queryKey: ['/api/cart'],
  //   queryFn: GetCart,
  // });
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isL, setL] = useRecoilState(isLoadingSomething);
  return (
    <SOProductCard>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 2,
        }}>
        <Image
          source={{uri: data.product.imageUrl}}
          style={{width: 108, height: 108}}
        />
      </View>
      <View style={{flexGrow: 1}}>
        <View
          style={{
            alignItems: 'flex-start',
            paddingHorizontal: 8,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProductInfo', {data: data.product});
            }}>
            <SText textWeight={500} textSize={36}>
              {data.product.name}
            </SText>
          </TouchableOpacity>
          <View
            style={{
              alignSelf: 'flex-start',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <NumberCounter
              id={data.id}
              size={24}
              max={data.amount ? data.amount : 0}
            />
          </View>
          <View
            style={{
              alignSelf: 'flex-end',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 12,
              paddingRight: 0,
            }}>
            <SText textWeight={400} textSize={24}>
              {data.product.price * data.amount}원
            </SText>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          alignItems: 'flex-end',
          position: 'absolute',
          right: 12,
          top: 12,
        }}
        onPress={async () => {
          try {
            setL(true);
            await RemoveFromCart({productId: data.id});
            queryClient.invalidateQueries({queryKey: ['/api/cart']});
            setL(false);
          } catch (e) {
            setL(false);
          }
        }}>
        <AntIcon size={36} name="close" />
      </TouchableOpacity>
    </SOProductCard>
  );
};
const SOProductCard = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 4px;
  background-color: white;
`;
export default ProductOrderCard;
