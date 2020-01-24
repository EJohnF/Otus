/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

class example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: undefined
    };
  }
  render() {
    if (this.state.greeting) return this.renderAfterButton();
    return (
      <View testID='welcome' style={{flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25, marginBottom: 30}}>
          Welcome
        </Text>
        <TouchableOpacity testID='hello_button' onPress={this.onButtonPress.bind(this, 'Hello')}>
          <Text style={{color: 'blue', marginBottom: 20}}>Say Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity testID='world_button' onPress={this.onButtonPress.bind(this, 'World')}>
          <Text style={{color: 'blue', marginBottom: 10}}>Say World</Text>
        </TouchableOpacity>
        <TextInput testID='textInput' placeholder="Please, enter some text" style={{fontSize: 20}}/>
        <TouchableOpacity testID='goodbye_button' onPress={this.onButtonPress.bind(this, 'Goodbye, World')}>
          <Text style={{color: 'blue', marginTop: 30, marginBottom: 20}}>Say Goodbye</Text>
        </TouchableOpacity>

      </View>
    );
  }
  renderAfterButton() {
    return (
      <View style={{flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25}}>
          {this.state.greeting}!!!
        </Text>
      </View>
    );
  }
  onButtonPress(greeting) {
    this.setState({
      greeting: greeting
    });
  }
}

AppRegistry.registerComponent('example', () => example);
