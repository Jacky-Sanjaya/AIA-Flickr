import React from 'react';
import {View, Text} from 'react-native';
import PhotoCard from '../../component/photoCard/PhotoCard';

import styles from './MainScreenStyle';
// let url = `http://farm${farmid}.staticflickr.com/${serverId}/${photoId}_${secretId}.jpg`;

export default function MainScreen() {
  function renderHeader() {
    return (
      <View style={styles.header}>
        <Text>Flickr</Text>
      </View>
    );
  }

  function renderMain() {
    return (
      <View style={styles.main}>
        <PhotoCard />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderMain()}
    </View>
  );
}
