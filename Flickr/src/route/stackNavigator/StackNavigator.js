import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../../screen/splashScreen/SplashScreen';
import MainScreen from '../../screen/MainScreen/MainScreen';
import BottomTabNavigator from '../../route/bottomTabNavigator/BottomTabNavigator';

const Stack = createStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
