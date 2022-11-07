import {View, Text, SafeAreaView, Button, Modal} from 'react-native';
import React from 'react';
import {SContainer} from '../components/styled/SContainter';
import Confirmation from '../components/check/Confirmation';
import {useNavigation} from '@react-navigation/native';
import {BottomButton} from './OrderStatusScreen';
import SButton from '../components/styled/SButton';
import {SText} from '../components/styled/stext';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RoomStackParamList = {
  Home: {data: null};
};
const OrderConfirmedScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RoomStackParamList>>();
  navigation.setOptions({
    headerShown: false,
  });
  return (
    <SContainer>
      <SafeAreaView
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Confirmation />
          <SText textWeight={600} textSize={24}>
            결제가 완료되었습니다
          </SText>
        </View>
        <Button
          title="홈으로 돌아가기"
          onPress={() => {
            navigation.goBack();
            navigation.navigate('Home', {data: null});
          }}
        />
      </SafeAreaView>
    </SContainer>
  );
};

export default OrderConfirmedScreen;
