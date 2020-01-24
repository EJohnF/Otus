import React, {Component, useState, useRef} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

const setTestId = (id) => {
  return Platform.OS === 'android' ?
    { accessibilityLabel: id } :
    { testID: id }
}

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default () => {
  const [value, setValue] = useState()
  const [displayedValue, setDisplayedValue ]= useState();
    return (
      <View style={styles.container}>
        <Text {...setTestId('welcomeText')} style={styles.welcome}>Welcome to React Native!</Text>
        <TextInput
          onChangeText={setValue}
          {...setTestId('login')} placeholder={"enter your login"}/>
        <TouchableOpacity
          onPress={() => {
            setDisplayedValue(value)
          }}
          {...setTestId('enter')}>
          <Text style={styles.welcome}>enter</Text>
        </TouchableOpacity>
        {displayedValue && (
          <Text {...setTestId('enteredText')} style={styles.welcome}>{displayedValue}</Text>)}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
