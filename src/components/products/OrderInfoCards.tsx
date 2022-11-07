import {View, Text, TouchableOpacity, Animated, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {ICartProduct} from '../Atom/atoms';
import {IOrderInfo} from '../../lib/api/orderApi';
import {SText} from '../styled/stext';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {ORDER_STATUS} from '../../constants/constants';
export const OrderStateToKr = (orderstatus: string) => {
  switch (orderstatus) {
    case ORDER_STATUS.ORDER_CANCELED:
      return {text: '주문 취소됨', color: 'red'};
    case ORDER_STATUS.ORDER_PAID || ORDER_STATUS.ORDER_DELAY:
      return {text: '주문 준비중', color: '#ea580c'};
    case ORDER_STATUS.ORDER_RECEIVED:
      return {text: '주문 수령 완료', color: '#10b981'};
    default:
      return {text: '오류', color: 'black'};
  }
};
const OrderInfoCards = ({item}: {item: IOrderInfo}) => {
  const [detailOpened, setOpened] = useState<boolean>(false);
  const setHeight = detailOpened ? {height: 400} : null;
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderWidth: 0.2,
        marginVertical: 2,
        padding: 16,
        ...setHeight,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={{width: 24}}></View>
        <View>
          <SText
            style={{textAlign: 'center'}}
            textWeight={600}
            textSize={24}
            textColor={OrderStateToKr(item.orderStatus).color}>
            {OrderStateToKr(item.orderStatus).text}
          </SText>
          <SText style={{textAlign: 'center'}} textWeight={400} textSize={18}>
            주문번호: {item.id}
          </SText>
        </View>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => setOpened(prev => !prev)}>
          {detailOpened ? (
            <AntIcon name="up" size={24} />
          ) : (
            <AntIcon name="down" size={24} />
          )}
        </TouchableOpacity>
      </View>
      {detailOpened ? (
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{uri: item.qrUrl}}
            style={{width: '80%', aspectRatio: 1}}
          />
        </View>
      ) : null}
    </View>
  );
};

export default OrderInfoCards;
