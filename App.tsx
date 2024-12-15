// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './routes/RootStack';

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}