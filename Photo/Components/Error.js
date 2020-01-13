import React from 'react';
import {Text, View} from 'react-native';
export const Error = props => {
  const {error} = props;
  return <View>{!!error && <Text style={{color: 'red'}}>{error}</Text>}</View>;
};
