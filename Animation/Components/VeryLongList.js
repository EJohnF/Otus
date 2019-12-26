import React, {useState, useCallback} from 'react';
import {FlatList, Image, View, TouchableOpacity, Text} from 'react-native';
import {difference} from 'lodash';
import {AnimatableView} from './AnimatableView';
const listOfPictures = [];

for (let i = 1; i < 500; i += 1) {
  listOfPictures.push(`https://picsum.photos/id/${i}/350/100`);
}

const Item = React.memo(
  ({item, onPress}) => (
    <View style={{marginVertical: 4}} key={item}>
      <TouchableOpacity onPress={() => onPress(item)}>
        <Image
          source={{uri: item}}
          style={{width: 350, height: 100, backgroundColor: 'blue'}}
        />
      </TouchableOpacity>
      <AnimatableView
        animation={animations[Math.floor(Math.random() * animations.length)]}
        iterationCount="infinite"
      />
      <View style={{flexDirection: 'row'}}>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
        <Text>4</Text>
        <Text>5</Text>
        <Text>6</Text>
        <Text>7</Text>
        <Text>8</Text>
        <Text>9</Text>
        <Text>10</Text>
        <Text> {item} </Text>
      </View>
    </View>
  ),
  (prevProps, nextProps) => prevProps.item === nextProps.item,
);

const animations = [
  'bounce',
  'flash',
  'jello',
  'pulse',
  'rotate',
  'rubberBand',
  'shake',
  'swing',
  'tada',
  'wobble',
  'bounceIn',
  'bounceInDown',
  'bounceInUp',
  'bounceInLeft',
  'bounceInRight',
  'bounceOut',
  'bounceOutDown',
  'bounceOutUp',
  'bounceOutLeft',
  'bounceOutRight',
  'fadeIn',
  'fadeInDown',
  'fadeInDownBig',
  'fadeInUp',
  'fadeInUpBig',
  'fadeInLeft',
  'fadeInLeftBig',
  'fadeInRight',
  'fadeInRightBig',
  'fadeOut',
  'fadeOutDown',
  'fadeOutDownBig',
  'fadeOutUp',
  'fadeOutUpBig',
  'fadeOutLeft',
  'fadeOutLeftBig',
  'fadeOutRight',
  'fadeOutRightBig',
  'flipInX',
  'flipInY',
  'flipOutX',
  'flipOutY',
  'lightSpeedIn',
  'lightSpeedOut',
  'slideInDown',
  'slideInUp',
  'slideInLeft',
  'slideInRight',
  'slideOutDown',
  'slideOutUp',
  'slideOutLeft',
  'slideOutRight',
  'zoomIn',
  'zoomInDown',
  'zoomInUp',
  'zoomInLeft',
  'zoomInRight',
  'zoomOut',
  'zoomOutDown',
  'zoomOutUp',
  'zoomOutLeft',
  'zoomOutRight',
];
export const VeryLongList = () => {
  const [list] = useState(listOfPictures);
  const [removed, setRemoved] = useState([]);
  const remove = useCallback(item => {
    setRemoved(prev => {
      return [...prev, item];
    });
  }, []);
  return (
    <FlatList
      data={difference(list, removed)}
      initialNumToRender={300}
      renderItem={({item}) => <Item item={item} onPress={remove} />}
      keyExtractor={(item, index) => item}
    />
  );
};
