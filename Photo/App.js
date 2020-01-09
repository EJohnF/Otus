import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { ImagePicker } from './Components/ImagePicker';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
       <ImagePicker/>
      </SafeAreaView>
    </>
  );
};


export default App;
