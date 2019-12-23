import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { MainScreen } from './src/Screen';

const theme = {
  colors: {
    // primary: 'red',
  },
  Button: {
    raised: true,
    // titleStyle: {
    //   color: 'blue',
    // },
  },
}

const AppContainer = () => (
  <ThemeProvider theme={theme}>
    <MainScreen/>
  </ThemeProvider>
)
export default AppContainer;
