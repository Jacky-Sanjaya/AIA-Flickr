import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import PhotoCard from '.././../component/photoCard/PhotoCard';
import {useNavigation} from '@react-navigation/native';

import styles from './SearchScreenStyle';

export default function SearchScreen() {
  const [image, setImage] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const navigation = useNavigation();

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=092f751d7bce9ac87bafb1018a0b3737&tags=${search}&per_page=10&page=${page}&format=json&nojsoncallback=1`,
      );
      setImage([...image, ...response.data.photos.photo]);
    } catch (error) {
      console.error(error);
    }
  };

  const onPressSearch = async () => {
    try {
      await setImage('');
      const response = await axios.get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=092f751d7bce9ac87bafb1018a0b3737&tags=${search}&per_page=10&page=${page}&format=json&nojsoncallback=1`,
      );

      setImage(response.data.photos.photo);
    } catch (error) {
      console.error(error);
    }
  };
  const handlePage = () => {
    setPage(page + 1);
  };
  function renderHeader() {
    return (
      <View style={styles.header}>
        <TextInput
          maxLength={80}
          placeholder="Search"
          style={styles.textInput}
          onChangeText={input => setSearch(input)}
          onEndEditing={() => onPressSearch()}
        />
        <TouchableOpacity onPress={() => onPressSearch()}>
          <Image
            resizeMode="contain"
            style={styles.search}
            source={require('../../assets/search.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
  function renderMain(item, index) {
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
    return (
      <FlatList
        data={image}
        renderItem={renderItem}
        key={index}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => handlePage()}
        onEndReachedThreshold={1}
      />
    );
  }

  useEffect(() => {
    handleSearch();
  }, [page]);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={require('../../assets/backgroundImage.png')}>
        {renderHeader()}
        {renderMain()}
      </ImageBackground>
    </View>
  );
}
