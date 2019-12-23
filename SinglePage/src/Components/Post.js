import { Icon, Image, ListItem } from 'react-native-elements';
import { ActivityIndicator, Alert, Dimensions, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import React, { useCallback, useRef, useState } from 'react';

const { width } = Dimensions.get('window')

const images = [
  { uri: 'https://picsum.photos/500' },
  { uri: 'https://picsum.photos/600' },
  { uri: 'https://picsum.photos/700' },
  { uri: 'https://picsum.photos/800' }
]

export const Post = () => {
  const [ activeIndex, setActiveIndex] = useState(0);
  const _carousel = useRef();

  const _renderItem = useCallback(({item, index}) => {
    return (
      <Image
        key={item.uri}
        style={{width, height: 300}}
        source={item}
        resizeMode="cover"
        PlaceholderContent={<ActivityIndicator size="large" />}
      />
    );
  },[])
  return (
    <>
      <ListItem
        leftAvatar={{ source: { uri: 'https://picsum.photos/100' } }}
        title="pieroborgo"
        subtitle="Milan, Italy"
        topDivider
        rightElement={
          <Icon
            name='ios-more'
            type='ionicon'
            Component={TouchableOpacity}
            onPress={() => {Alert.alert("Меню", "Тут может быть меню выбора")}}
          />
        }
      />
      <Carousel
        ref={_carousel}
        data={images}
        renderItem={_renderItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={setActiveIndex}
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeIndex}
      />
    </>
  )
}
