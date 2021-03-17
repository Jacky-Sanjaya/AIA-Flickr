import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import PhotoCard from '../../component/photoCard/PhotoCard';
import {useNavigation} from '@react-navigation/native';

import styles from './MainScreenStyle';

export default function MainScreen() {
  const [recentImage, setRecentImage] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [footerLoading, setFooterLoading] = useState(true);

  const navigation = useNavigation();

  const handleRecentImage = async () => {
    try {
      const response = await axios.get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=092f751d7bce9ac87bafb1018a0b3737&per_page=10&page=${page}&format=json&nojsoncallback=1`,
      );
      const data = recentImage.concat(response.data.photos.photo);
      setRecentImage(data);
      setLoading(false);
      setFooterLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const hanldePage = async () => {
    setFooterLoading(true);
    setPage(page + 1);
    console.log('page', page);
  };

  const renderFooterLoading = () => {
    if (footerLoading) {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="#1A3150" />
        </View>
      );
    } else {
      return null;
    }
  };

  function renderHeader() {
    return (
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require('../../assets/flickr.png')}
        />
      </View>
    );
  }

  function renderMain() {
    const renderItem = ({item}) => {
      const url = `http://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`;

      return (
        <PhotoCard
          press={() => navigation.navigate('WebViewScreen', {url: url})}
          text={item.title}
          source={url}
        />
      );
    };
    return loading ? (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#1A3150" />
      </View>
    ) : (
      <ImageBackground
        resizeMode="cover"
        source={require('../../assets/backgroundImage.png')}
        style={styles.main}>
        <FlatList
          data={recentImage}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={() => hanldePage()}
          onEndReachedThreshold={0}
          ListFooterComponent={() => renderFooterLoading()}
        />
      </ImageBackground>
    );
  }

  useEffect(() => {
    handleRecentImage();
    console.log('test');
  }, [page]);

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderMain()}
    </View>
  );
}
