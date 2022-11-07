import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ListRenderItem,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import UserProfileCard from '../components/user/UserProfile/UserProfileCard';
import {useNavigation} from '@react-navigation/native';
import {SContainer} from '../components/styled/SContainter';
import {useQuery} from '@tanstack/react-query';
import {getOrderHistory, IOrderInfo} from '../lib/api/orderApi';
import {useRefreshOnFocus} from '../hooks/useRefetchOnFocus';
import Loader from '../components/Loading/Loader';
import {SText} from '../components/styled/stext';
import {ORDER_STATUS} from '../constants/constants';
import SFLListTabBarCrash from '../components/styled/SFLListTabBarCrash';
import OrderInfoCards from '../components/products/OrderInfoCards';
import MainHeader from '../components/headers/MainHeader';
import SHeader from '../components/headers/OrderHeader';

export default function HomeScreen() {
  const {data, isLoading, refetch} = useQuery({
    queryKey: ['/api/order/history'],
    queryFn: getOrderHistory,
    refetchOnReconnect: true,
  });
  useRefreshOnFocus(refetch);
  const navigation = useNavigation();
  useLayoutEffect(() =>
    navigation.setOptions({
      headerShown: false,
    }),
  );
  const renderItem: ListRenderItem<IOrderInfo> = ({item}) => (
    <OrderInfoCards item={item} />
  );
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <SafeAreaView style={{marginVertical: 12}}>
        {isLoading ? <Loader /> : null}
        <MainHeader />
        <SHeader title="주문목록" align="center" />
        <FlatList
          ListFooterComponent={<SFLListTabBarCrash height={48} />}
          data={data?.orderHistory.filter(
            item => item.orderStatus == ORDER_STATUS.ORDER_PAID,
          )}
          renderItem={renderItem}
          key={'__'}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
}
