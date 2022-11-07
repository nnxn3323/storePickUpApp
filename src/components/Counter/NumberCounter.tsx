import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {SText} from '../styled/stext';
import {ICartInfo} from '../Atom/atoms';
import {IProduct} from '../products/ProductCard';
interface CounterProps {
  id: string;
  max: number;
  size: number;
}

const NumberCounter = ({max, id, size}: CounterProps) => {
  // const [products, setProducts] = useRecoilState(OrderInfo);
  // const InitialAmount = products.find(
  //   (ele: ICartInfo) => ele.info.id === id,
  // )?.amount;
  // if (!InitialAmount) return <></>;
  // const [num, SetNum] = useState<number>(InitialAmount as number);
  // const Decrease = (k: number): void => {
  //   if (k == 1) {
  //     SetNum(prev => prev);
  //     setProducts(prev => prev);
  //     return;
  //   }
  //   SetNum(prev => prev - 1);
  //   setProducts((prev: ICartInfo[]) => {
  //     if (prev.find(item => item.info.id === id) == null) {
  //       return prev;
  //     } else {
  //       return prev.map(item => {
  //         if (item.info.id === id) {
  //           const RetVal: ICartInfo = {...item, amount: InitialAmount - 1};
  //           return RetVal;
  //         } else {
  //           return item;
  //         }
  //       });
  //     }
  //   });
  // };
  // const Increase = (k: number): void => {
  //   if (k == max) {
  //     SetNum(prev => prev);
  //     setProducts(prev => prev);
  //     return;
  //   }
  //   SetNum(prev => prev + 1);
  //   setProducts((prev: ICartInfo[]) => {
  //     if (prev.find(item => item.info.id === id) == null) {
  //       return prev;
  //     } else {
  //       return prev.map(item => {
  //         if (item.info.id === id) {
  //           const RetVal: ICartInfo = {...item, amount: InitialAmount + 1};
  //           return RetVal;
  //         } else {
  //           return item;
  //         }
  //       });
  //     }
  //   });
  // };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <TouchableOpacity
        style={{
          backgroundColor: '#b2b2b2',
          borderRadius: size / 2,
          aspectRatio: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => Decrease(num)}>
        <AntIcon name="minus" size={size} />
      </TouchableOpacity>
      <View
        style={{
          paddingHorizontal: size / 2,

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SText textWeight={400} textSize={size}>
          {num}
        </SText>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#b2b2b2',
          borderRadius: size / 2,
          aspectRatio: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => Increase(num)}>
        <AntIcon name="plus" size={size} />
      </TouchableOpacity> */}
    </View>
  );
};

export default NumberCounter;
