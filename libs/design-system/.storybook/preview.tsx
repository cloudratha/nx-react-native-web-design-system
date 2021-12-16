import React from 'react';
import { NativeBaseProvider } from 'native-base';

const withContainer = (StoryFn) => {
  return (
    <NativeBaseProvider>
      <StoryFn />
    </NativeBaseProvider>
  );
};

export const decorators = [withContainer];
