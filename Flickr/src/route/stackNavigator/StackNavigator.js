import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../../screen/splashScreen/SplashScreen';
import MainScreen from '../../screen/MainScreen/MainScreen';
import BottomTabNavigator from '../../route/bottomTabNavigator/BottomTabNavigator';
import WebViewScreen from '../../screen/webView/WebViewScreen';
import FavoriteScreen from '../../screen/favoriteScreen/FavoriteScreen';

const Stack = createStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
      <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
    </Stack.Navigator>
  );
}
