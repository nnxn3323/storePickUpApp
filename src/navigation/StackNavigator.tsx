import {View, Text} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {
  CompositeScreenProps,
  getFocusedRouteNameFromRoute,
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import MyPageScreen from '../screens/MyPageScreen';
import ProductListScreen from '../screens/ProductListScreen';
import OrderStatusScreen from '../screens/OrderStatusScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import {IMPData} from 'iamport-react-native';
import {tabBarHeight} from '../constants/constants';
import OrderConfirmedScreen from '../screens/OrderConfirmedScreen';
const Tab = createBottomTabNavigator();
const DetailStack = createNativeStackNavigator();
export interface PaymentParams {
  params: IMPData.PaymentData;
  tierCode?: string;
}

export type RootStackParamList = {
  Payment: PaymentParams | undefined;
  PaymentTest: undefined;
  PaymentResult: any;
};
export const getVisibility = (route: any, selectedIndex: number) => {
  if (!route.state) return true;
  let index = route.state.index;
  if (index === selectedIndex) {
    return false;
  }
  return true;
};
const ProductScreens = ({navigation, route}: any) => {
  return (
    <DetailStack.Navigator>
      <DetailStack.Screen
        name="ProductList"
        options={{
          headerShown: false,
        }}
        component={ProductListScreen}
      />
      <DetailStack.Screen name="ProductInfo" component={ProductDetailScreen} />
    </DetailStack.Navigator>
  );
};
const ProductOrderScreens = ({navigation, route}: any) => {
  return (
    <DetailStack.Navigator>
      <DetailStack.Screen
        name="ProductCart"
        options={{
          headerShown: false,
        }}
        component={OrderStatusScreen}
      />
      <DetailStack.Screen name="ProductInfo" component={ProductDetailScreen} />
      <DetailStack.Screen
        name="OrderConfirm"
        component={OrderConfirmedScreen}
      />
    </DetailStack.Navigator>
  );
};
const StackNavigator = () => {
  return (
    <Tab.Navigator
      defaultScreenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Product"
        options={{
          headerShown: false,
        }}
        component={ProductScreens}
      />
      <Tab.Screen
        name="Orders"
        component={ProductOrderScreens}
        options={{headerShown: false}}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Mypage"
        component={MyPageScreen}
      />
    </Tab.Navigator>
  );
};

export default StackNavigator;
