import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import styles from './PhotoCardStyle';

export default function PhotoCard(props) {
  return (
    <View>
      <TouchableOpacity onPress={props.press} style={styles.container}>
        <AutoHeightImage
          style={styles.image}
          width={styles.image.width}
          source={{uri: props.source}}
        />
        <View style={styles.desc}>
          <Text numberOfLines={1} style={styles.text}>
            {props.text}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
