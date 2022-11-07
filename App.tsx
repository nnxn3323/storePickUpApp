import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import {View, Dimensions} from 'react-native';
import {RecoilRoot} from 'recoil';
import AuthProvider, {AuthContext} from './src/context/AuthProvider';
import {getStorageData} from './src/lib/client';
import AuthStack from './src/navigation/AuthStack';
import Navigator from './src/navigation/Navigator';
import StackNavigator from './src/navigation/StackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
export const queryClient = new QueryClient();
export default function App() {
  return (
    <AuthProvider>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Navigator />
        </QueryClientProvider>
      </RecoilRoot>
    </AuthProvider>
  );
}
