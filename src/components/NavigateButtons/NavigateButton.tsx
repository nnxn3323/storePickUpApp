import {View, Text, Button, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import {SText} from '../styled/stext';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface NavigateButtonProps {
  children: React.ReactNode;
  name: string;
  route?: string;
}
const NavigateButton = ({children, name, route}: NavigateButtonProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>{children}</View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <SText textWeight={300} textSize={12}>
          {name}
        </SText>
      </View>
    </TouchableOpacity>
  );
};

export default NavigateButton;
