import React, {useState} from 'react';
import {TouchableOpacity, Text, Animated} from 'react-native';

export const AnimatedButton = () => {
  const [transformX, setTransformX] = useState(new Animated.Value(0));
  return (
    <TouchableOpacity
      style={{
        width: 150,
        height: 50,
        backgroundColor: 'blue',
        margin: 20,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        transform: [
          {
            translateX: transformX,
          },
        ],
      }}
      onPress={() => {
        Animated.sequence([
          Animated.spring(transformX, {
            toValue: 1000,
            useNativeDriver: true,
          }),
          Animated.spring(transformX, {
            toValue: 0,
            useNativeDriver: true,
            delay: 1000,
          }),
        ]).start();
      }}>
      <Text style={{color: 'white'}}>Нажми на меня</Text>
    </TouchableOpacity>
  );
};
