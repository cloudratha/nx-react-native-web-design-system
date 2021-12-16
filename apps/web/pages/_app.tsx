import React from 'react';
import { AppProps } from 'next/app';
import { NativeBaseProvider } from 'native-base';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NativeBaseProvider>
        <Component {...pageProps} />
      </NativeBaseProvider>
    </>
  );
}

export default CustomApp;
