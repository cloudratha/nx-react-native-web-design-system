/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';

import { Login } from '@react-native-web-nx-demo/design-system';

const App = () => (
  <NativeBaseProvider>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  </NativeBaseProvider>
);

export default App;
