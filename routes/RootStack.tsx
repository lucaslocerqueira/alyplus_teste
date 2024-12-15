import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/unlogged/Login';
import Home from '../pages/logged/Home';

const Stack = createNativeStackNavigator();

const defaultHeader = { headerShown: false };

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" options={{ ...defaultHeader }} component={Login} />
        <Stack.Screen name="Home" component={Home} options={{ ...defaultHeader }} />
    </Stack.Navigator>
  );
}

