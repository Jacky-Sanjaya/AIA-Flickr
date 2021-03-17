import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import ModalPop from '../../component/modalPop/ModalPop';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WebView} from 'react-native-webview';

import styles from './WebViewScreenStyle';

export default function WebViewScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [url, setUrl] = useState('');
  const [desc, setDesc] = useState('');

  const addFavorite = async () => {
    let list = await AsyncStorage.getItem('favorite')
      .then(item => JSON.parse(item))
      .catch(e => {
        throw e;
      });
    console.log('test', list);
    let item = {
      url: url,
      desc: desc,
      key: uuid.v4(),
    };
    if (list == null) {
      list = [];
    }
    list.push(item);
    setUrl('');
    setDesc('');
    await AsyncStorage.setItem('favorite', JSON.stringify(list));
    console.log(`ini isi list`, list);
  };

  const showLoader = () => {
    setIsVisible(true);
  };

  const hideLoader = () => {
    setIsVisible(false);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    setUrl(props.route.params.url);
    setDesc(props.route.params.desc);
  }, []);

  return (
    <View style={isVisible === true ? styles.stylBefore : styles.styleAfter}>
      {isVisible ? (
        <ActivityIndicator
          color="blue"
          size="large"
          style={styles.activityIndicatorStyle}
        />
      ) : null}
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require('../../assets/flickr.png')}
        />
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.text}>Favorite this image</Text>
          <Image
            resizeMode="contain"
            style={styles.love}
            source={require('../../assets/like.png')}
          />
        </TouchableOpacity>
      </View>
      <WebView
        style={styles.webViewStyle}
        source={{uri: props.route.params.url}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onLoadStart={() => showLoader()}
        onLoad={() => hideLoader()}
      />
      <ModalPop
        yes={() => {
          addFavorite();
          hideModal();
        }}
        no={() => hideModal()}
        onBackButtonPress={() => hideModal()}
        onBackdropPress={() => hideModal()}
        visible={modalVisible}
        text="Favorite this one ?"
      />
    </View>
  );
}
