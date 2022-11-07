import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99999,
      }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loader;
