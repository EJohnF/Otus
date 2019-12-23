import React, { useCallback, useRef, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import LottieView from "lottie-react-native";

export const Like = () => {
  const _heart = useRef();
  const [isLike, setIsLike] = useState();
  const onPress = useCallback(() => {
    if (!isLike) {
      _heart.current.play(60, 85)
    } else {
      _heart.current.reset()
    }
    setIsLike((like) => !like)
  }, [isLike, _heart.current])
  return (
    <View style={{overflow: 'hidden'}}>
      <TouchableOpacity onPress={onPress} style={{width: 250, height: 250, margin: -80}}>
        <LottieView
          loop={false}
          ref={_heart}
          resizeMode="cover"
          source={require('../../assets/heart.json')}
        />
      </TouchableOpacity>
    </View>
  )
}
