import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import SProfileImage from '../components/styled/SProfileImage';
import {BackgroundCard} from '../components/user/UserProfile/UserProfileCard';
import {SText} from '../components/styled/stext';
import {SContainer} from '../components/styled/SContainter';
import ProductOrderCard from '../components/products/ProductOrderCard';
import ProductOrderList from '../components/products/ProductOrderList';
import styled from 'styled-components/native';
import {useRecoilState} from 'recoil';
import {useNavigation} from '@react-navigation/native';
import OrderHeader from '../components/headers/OrderHeader';
import SHeader from '../components/headers/OrderHeader';
import SButton from '../components/styled/SButton';
import {GetCart} from '../lib/api/cart/cartApi';
import {useRefreshOnFocus} from '../hooks/useRefetchOnFocus';
import {requestOrder} from '../lib/api/orderApi';
import {useQuery} from '@tanstack/react-query';
import {IProduct} from '../components/products/ProductCard';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SFLListTabBarCrash from '../components/styled/SFLListTabBarCrash';
import {isLoadingSomething} from '../components/Atom/atoms';
import Loader from '../components/Loading/Loader';
type RootStackParamList = {
  ProductCart: {data: null};
  ProductInfo: {data: IProduct};
  OrderConfirm: {data: null};
};
const OrderStatusScreen = () => {
  const {data, isLoading, error, refetch} = useQuery({
    queryKey: ['/api/cart'],
    queryFn: GetCart,
    refetchOnMount: true,
    onError: () => {},
  });
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [tot, SetTot] = useState(0);
  const [modalShown, setModalShown] = useState<boolean>(false);
  const [isL, setL] = useRecoilState(isLoadingSomething);
  useRefreshOnFocus(refetch);
  useEffect(() => {
    SetTot(0);
    data?.cart.cartproducts.forEach(item =>
      SetTot(prev => prev + item.amount * item.product.price),
    );
  }, [data]);
  return (
    <SContainer>
      <SafeAreaView style={{flex: 1}}>
        <SHeader title="장바구니" />
        {data?.cart.cartproducts.length ? (
          <>
            <CartCard>
              <View>
                <ProductOrderList products={data?.cart!} tot={tot} />
              </View>
            </CartCard>
            <BottomButton>
              <SButton
                text={`${tot}원 결제하기`}
                onPress={() => setModalShown(true)}
              />
            </BottomButton>
          </>
        ) : (
          <View
            style={{
              height: '90%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SText textWeight={200} textSize={24}>
              장바구니에 상품이 없습니다
            </SText>
          </View>
        )}
      </SafeAreaView>
      <Modal
        visible={modalShown}
        animationType="slide"
        presentationStyle="formSheet"
        onRequestClose={() => {
          setModalShown(false);
        }}>
        <SafeAreaView style={{flex: 1}}>
          <SFLListTabBarCrash height={-48} />
          <View
            style={{
              height: '50%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SText textWeight={600} textSize={48}>
              결제수단 선택 섹션
            </SText>
          </View>
          <BottomButton>
            <SButton
              text="결제하기"
              onPress={async () => {
                setL(true);
                await requestOrder({cash: tot});
                await refetch();
                setL(false);
                setModalShown(false);
                (() => navigation.navigate('OrderConfirm', {data: null}))();
              }}
            />
            <SFLListTabBarCrash height={48} />
          </BottomButton>
        </SafeAreaView>
        {isL ? <Loader /> : null}
      </Modal>
    </SContainer>
  );
};
export const BottomButton = styled.View`
  background-color: white;
  width: 100%;
  position: absolute;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  border-top-width: 0.2px;
  border-color: #b2b2b2;
  margin-top: 4px;
  bottom: 0;
`;
const CartCard = styled.View``;
export default OrderStatusScreen;
