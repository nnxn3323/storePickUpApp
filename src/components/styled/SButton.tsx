import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SText} from './stext';

const SButton = ({
  text,
  onPress,
  disabled,
}: {
  text: string;
  onPress: () => any;
  disabled?: boolean | false;
}) => {
  return (
    <TouchableOpacity
      style={{
        height: 60,
        width: '100%',
        paddingHorizontal: 24,
        paddingVertical: 12,
        backgroundColor: '#6366f1',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      disabled={disabled}
      onPress={onPress}>
      <SText textWeight={600} textSize={18} textColor="white">
        {text}
      </SText>
    </TouchableOpacity>
  );
};
export default SButton;
