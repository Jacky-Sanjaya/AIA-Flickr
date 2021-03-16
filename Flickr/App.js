import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/route/stackNavigator/StackNavigator';

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
