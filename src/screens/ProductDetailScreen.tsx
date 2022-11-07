import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {IProduct, RootStackParamList} from '../components/products/ProductCard';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import styled from 'styled-components/native';
import {SContainer} from '../components/styled/SContainter';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {SText} from '../components/styled/stext';
import {BottomButton} from './OrderStatusScreen';
import SButton from '../components/styled/SButton';
import {AddToCart} from '../lib/api/cart/cartApi';
import {isLoadingSomething} from '../components/Atom/atoms';
import {useRecoilState} from 'recoil';

type ScreenRouteProp = RouteProp<RootStackParamList, 'ProductInfo'>;

const ProductDetailScreen = () => {
  const [isL, setL] = useRecoilState(isLoadingSomething);
  const [show, SetShow] = useState(false);
  const {
    params: {data},
  } = useRoute<ScreenRouteProp>();
  const navigation = useNavigation();
  useLayoutEffect(() =>
    navigation.setOptions({
      headerShown: false,
    }),
  );
  return (
    <SContainer style={{height: '100%'}}>
      <SafeAreaView>
        <STopBar
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <AntIcon
            name="arrowleft"
            size={36}
            onPress={() => navigation.goBack()}
          />
        </STopBar>
        <Image
          source={{
            uri: data.imageUrl,
          }}
          style={{width: '100%', aspectRatio: 1}}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              paddingHorizontal: 18,
              paddingVertical: 12,
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
            <SText textWeight={600} textSize={36}>
              {data.name}
            </SText>
          </View>
          <View
            style={{
              paddingHorizontal: 18,
              paddingVertical: 12,
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <SText textWeight={300} textSize={18}>
              {data.price}원
            </SText>
            <SText textWeight={300} textSize={18}>
              {data.stock}개
            </SText>
          </View>
        </View>
      </SafeAreaView>
      <BottomButton>
        <SButton
          text="구매하기"
          onPress={async () => {
            try {
              setL(true);
              await AddToCart({productId: data.id, amount: 1});
              setL(false);
            } catch {
              setL(false);
            }
          }}
        />
      </BottomButton>
    </SContainer>
  );
};

const STopBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
`;
export default ProductDetailScreen;
