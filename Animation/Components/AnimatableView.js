import React, {useState} from 'react';
import {View, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';

export class AnimatableView extends React.Component {
  render() {
    return (
      <Animatable.View
        {...this.props}
        style={{
          width: 150,
          height: 50,
          backgroundColor: 'green',
          margin: 20,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white'}}>Привлекаю внимание</Text>
      </Animatable.View>
    );
  }
}
