import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {HeaderBackground} from './MainHeader';
import {SText} from '../styled/stext';
interface IHeaderProps {
  title: string;
  align?: string;
}
const SHeader = ({title, align}: IHeaderProps) => {
  return (
    <HeaderBackground
      style={{alignItems: 'center', justifyContent: align ?? 'flex-start'}}>
      <SText
        style={{paddingHorizontal: 12, paddingVertical: 8}}
        textWeight={600}
        textSize={36}>
        {title}
      </SText>
    </HeaderBackground>
  );
};

export default SHeader;
