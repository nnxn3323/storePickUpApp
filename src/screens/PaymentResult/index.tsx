import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RootStackParamList} from '../../navigation/StackNavigator';
import {Button, Text, TouchableOpacity, View} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'PaymentResult'>;

function PaymentResult({route, navigation}: Props) {
  const imp_success = route.params?.imp_success;
  const success = route.params?.success;
  const imp_uid = route.params?.imp_uid;
  const merchant_uid = route.params?.merchant_uid;
  const error_msg = route.params?.error_msg;

  // [WARNING: 이해를 돕기 위한 것일 뿐, imp_success 또는 success 파라미터로 결제 성공 여부를 장담할 수 없습니다.]
  // 아임포트 서버로 결제내역 조회(GET /payments/${imp_uid})를 통해 그 응답(status)에 따라 결제 성공 여부를 판단하세요.
  const isSuccess = !(
    imp_success === 'false' ||
    imp_success === false ||
    success === 'false' ||
    success === false
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        margin: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
      }}>
      {isSuccess ? <Text>Success</Text> : <Text>Failed</Text>}
      <Text>{`결제에 ${isSuccess ? '성공' : '실패'}하였습니다`}</Text>
      <View>
        <View>
          <Text>아임포트 번호</Text>
          <Text>{imp_uid}</Text>
        </View>
        {isSuccess ? (
          <View>
            <Text>주문번호</Text>
            <Text>{merchant_uid}</Text>
          </View>
        ) : (
          <View>
            <Text>에러메시지</Text>
            <Text>{error_msg}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

export default PaymentResult;
