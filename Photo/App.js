import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  TextInput,
  View,
} from 'react-native';
import {ImagePicker} from './Components/ImagePicker';
import {Error} from './Components/Error';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ImagePicker />
        {/*<Error error={'some problem'} />*/}
        {/*<Error />*/}
        {/*<Error error={""}/>*/}
      </SafeAreaView>
    </>
  );
};

export default App;
