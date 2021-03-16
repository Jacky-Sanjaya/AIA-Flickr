import React, {useState} from 'react';
import {ActivityIndicator, View, Image} from 'react-native';
import {WebView} from 'react-native-webview';

import styles from './WebViewScreenStyle';

export default function WebViewScreen(props) {
  const [isVisible, setIsVisible] = useState(false);

  const showLoader = () => {
    setIsVisible(true);
  };

  const hideLoader = () => {
    setIsVisible(false);
  };
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
      </View>
      <WebView
        style={styles.webViewStyle}
        source={{uri: props.route.params.url}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onLoadStart={() => showLoader()}
        onLoad={() => hideLoader()}
      />
    </View>
  );
}
