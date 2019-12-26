import React from 'react';
import {SafeAreaView, ScrollView, Image, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {AnimatedButton} from './Components/AnimatedButton';
import {AnimatedText} from './Components/AnimatedText';
import {AnimatableView} from './Components/AnimatableView';
// import {VeryLongList} from './Components/VeryLongList';
import { VeryLongListTemplate } from './Components/VeryLongListTemplate';


/*
        <Image
          source={{
            uri: 'https://media.giphy.com/media/UCTuhzdyc9OKs/giphy.gif',
          }}
          style={{width: 300, height: 300}}
        />
        <AnimatedButton />
        <AnimatedText />
        <Animatable.Text
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          style={{textAlign: 'center', marginVertical: 10, fontSize: 20}}>
          ❤️
        </Animatable.Text>
        <AnimatableView animation="rubberBand" iterationCount="infinite" />
        */

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{alignSelf: 'center', flex: 1}}>
        {/*<VeryLongList />*/}
        <VeryLongListTemplate />
      </SafeAreaView>
    </>
  );
};

export default App;
