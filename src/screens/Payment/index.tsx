import React from 'react';
import IMP from 'iamport-react-native';
import {getUserCode} from '../../utils/utils';
import Loader from '../../components/Loading/Loader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../navigation/StackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Payment'>;

function Payment({route, navigation}: Props) {
  const params = route.params?.params;
  const tierCode = route.params?.tierCode;
  const userCode = getUserCode(params!.pg, tierCode);

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <IMP.Payment
        userCode={userCode}
        tierCode={tierCode}
        loading={<Loader />}
        data={params!}
        callback={response => navigation.replace('PaymentResult', response)}
      />
    </SafeAreaView>
  );
}

export default Payment;
