import {View, Text} from 'react-native';
import React from 'react';
import {tabBarHeight} from '../../constants/constants';
const SFLListTabBarCrash = ({height}: {height?: number}) => {
  if (!height) height = 0;
  return <View style={{height: tabBarHeight + height, width: '100%'}}></View>;
};

export default SFLListTabBarCrash;
