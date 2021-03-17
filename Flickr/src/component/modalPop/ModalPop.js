import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import Modal from 'react-native-modal';

import styles from './ModalPopStyle';

export default function ModalPop(props) {
  function renderMain() {
    return (
      <Modal
        onBackButtonPress={props.onBackButtonPress}
        onBackdropPress={props.onBackdropPress}
        isVisible={props.visible}>
        <ImageBackground
          source={require('../../assets/backgroundImage.png')}
          style={styles.container}>
          <Text style={styles.text}>{props.text}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={props.yes} style={styles.buttonYes}>
              <Text style={styles.text}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.no} style={styles.buttonNo}>
              <Text style={styles.text}>No</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Modal>
    );
  }
  return renderMain();
}
