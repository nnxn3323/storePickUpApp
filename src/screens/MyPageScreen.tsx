import {View, Text, SafeAreaView} from 'react-native';
import React, {useContext} from 'react';
import UserProfileCard from '../components/user/UserProfile/UserProfileCard';
import SButton from '../components/styled/SButton';
import {logout} from '../lib/api/auth';
import {AuthContext} from '../context/AuthProvider';
import Loader from '../components/Loading/Loader';
import {SContainer} from '../components/styled/SContainter';
import SHeader from '../components/headers/OrderHeader';
import {useRecoilState} from 'recoil';
import {isLoadingSomething} from '../components/Atom/atoms';
import {BottomButton} from './OrderStatusScreen';
import {useQuery} from '@tanstack/react-query';
import {getMyInfo} from '../lib/api/me/meApi';
import {SText} from '../components/styled/stext';
//@ts-ignore
const MyPageScreen = () => {
  const {data} = useQuery({
    queryKey: ['/api/me'],
    queryFn: getMyInfo,
  });
  const [isL, setL] = useRecoilState(isLoadingSomething);
  const {logoutFn} = useContext(AuthContext);
  return (
    <SContainer>
      <SafeAreaView style={{height: '100%'}}>
        <SHeader title="마이페이지" />

        <SText textWeight={600} textSize={36} style={{textAlign: 'center'}}>
          {data?.me.username}(으)로 로그인 됨
        </SText>
        {isL ? <Loader /> : null}
        <BottomButton>
          <SButton text="로그아웃" onPress={() => logoutFn()} />
        </BottomButton>
      </SafeAreaView>
    </SContainer>
  );
};

export default MyPageScreen;
