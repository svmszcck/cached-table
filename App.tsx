import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Home from './src/screens/HomeScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <Home />
    </SafeAreaView>
  );
}

export default App;
