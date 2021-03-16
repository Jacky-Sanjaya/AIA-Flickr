import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import axios from 'axios';
import PhotoCard from '../../component/photoCard/PhotoCard';

import styles from './MainScreenStyle';
// let url = `http://farm${farmid}.staticflickr.com/${serverId}/${photoId}_${secretId}.jpg`;

export default function MainScreen() {
  const [recentImage, setRecentImage] = useState('');
  const [page, setPage] = useState(1);
  const [footerLoading, setFooterLoading] = useState(true);

  const handleRecentImage = async () => {
    try {
      const response = await axios.get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=092f751d7bce9ac87bafb1018a0b3737&per_page=10&format=json&nojsoncallback=1`,
      );

      setRecentImage([...recentImage, ...response.data.photos.photo]);
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
        <Text>Flickr</Text>
      </View>
    );
  }

  function renderMain(item, index) {
    const renderItem = ({item}) => {
      const url = `http://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`;
      if (!url) {
        null;
      }
      return <PhotoCard text={item.title} source={url} />;
    };
    return (
      <View style={styles.main}>
        <FlatList
          data={recentImage}
          renderItem={renderItem}
          key={index}
          keyExtractor={(item = () => `${item._id}`)}
          // onEndReached={() => hanldePage()}
          // onEndReachedThreshold={5000}
          // ListFooterComponent={() => renderFooterLoading()}
        />
      </View>
    );
  }

  useEffect(() => {
    handleRecentImage();
  }, [page]);

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderMain()}
    </View>
  );
}
