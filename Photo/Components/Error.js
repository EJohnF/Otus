import React from 'react';
import {Text, View} from 'react-native';
export const Error = ({error}) => {
  return <View>{error && <Text style={{color: 'red'}}>{error}</Text>}</View>;
};
