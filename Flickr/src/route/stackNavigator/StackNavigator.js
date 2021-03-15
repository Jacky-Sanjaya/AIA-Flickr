import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../../screen/splashScreen/SplashScreen';
import MainScreen from '../../screen/MainScreen/MainScreen';

const Stack = createStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
}
