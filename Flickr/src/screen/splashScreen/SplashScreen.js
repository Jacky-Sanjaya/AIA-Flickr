import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useNavigation, StackActions} from '@react-navigation/native';

import styles from './SplashScreenStyle';

export default function SplashScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('BottomTabNavigator'));
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../assets/flickr.png')}
      />
    </View>
  );
}
