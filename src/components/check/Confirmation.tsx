import {View, Text} from 'react-native';
import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

const Confirmation = () => {
  return (
    <View
      style={{
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <AnimatedLottieView
        source={require('../../assets/103528-done-check.json')}
        autoPlay
        loop={false}
      />
    </View>
  );
};

export default Confirmation;
