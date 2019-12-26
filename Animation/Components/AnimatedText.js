import React, {useState, useEffect} from 'react';
import {Text, Animated} from 'react-native';

export const AnimatedText = () => {
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  useEffect(() => {
    const animation = [
      Animated.timing(opacity, {
        toValue: 1,
        useNativeDriver: true,
        duration: 1000,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        useNativeDriver: true,
        duration: 1000,
      }),
    ];
    const callback = () => {
      Animated.sequence(animation).start(callback);
    };
    Animated.sequence(animation).start(callback);
  }, [opacity]);
  //
  // return (
  //   <Text
  //     style={{color: 'red', fontWeight: 'bold', alignSelf: 'center', opacity}}>
  //     Переменная прозрачность
  //   </Text>
  // );

  return (
    <Animated.Text
      style={{color: 'red', fontWeight: 'bold', alignSelf: 'center', opacity}}>
      Переменная прозрачность
    </Animated.Text>
  );
};
