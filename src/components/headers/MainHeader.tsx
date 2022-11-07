import {View, Text, Image} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import SProfileImage from '../styled/SProfileImage';
import FeatherIcon from 'react-native-vector-icons/Feather';
const MainHeader = () => {
  return (
    <HeaderBackground>
      <FeatherIcon
        size={40}
        name="bell"
        color="gray"
        style={{padding: 5, aspectRatio: 1}}
      />
      <Image
        style={{width: 100, height: 50}}
        source={{
          uri: 'https://w.namu.la/s/f5d1d4c36d4767bdccc217cef7dbb31818dfc7f6c538cbaa2838420520c08790128d8f7032638b16d03ee68993dcc92990d9d6f103aff4a226466a9d3936909f66c800c32291469480c47d8823fd753368bdd58fb87318f1945a19b0a367ab05e396882c2cb0c8f65ccf460e55aa9315',
        }}
      />
      <FeatherIcon
        name="shopping-cart"
        size={40}
        color={'gray'}
        style={{padding: 5, aspectRatio: 1}}
      />
    </HeaderBackground>
  );
};

export const HeaderBackground = styled.View`
  flex-direction: row;
  padding-left: 4px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  justify-content: space-between;
  align-items: center;
`;
export default MainHeader;
