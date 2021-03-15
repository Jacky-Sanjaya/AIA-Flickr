import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import styles from './PhotoCardStyle';

export default function PhotoCard(props) {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <AutoHeightImage
          width={styles.image.width}
          source={{uri: props.source}}
        />
      </TouchableOpacity>
    </View>
  );
}
