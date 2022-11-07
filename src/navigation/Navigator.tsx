import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import AuthStack from './AuthStack';
import {AuthContext} from '../context/AuthProvider';
import {useRecoilState, useRecoilValue} from 'recoil';
import {isLoadingSomething} from '../components/Atom/atoms';
import Loader from '../components/Loading/Loader';
import {useQuery} from '@tanstack/react-query';

const Navigator = () => {
  const {loginFn, logoutFn, cookie} = useContext(AuthContext);
  const isLoadingSth = useRecoilValue(isLoadingSomething);
  return (
    <NavigationContainer>
      {cookie ? <StackNavigator /> : <AuthStack />}
      {isLoadingSth ? <Loader /> : null}
    </NavigationContainer>
  );
};

export default Navigator;
