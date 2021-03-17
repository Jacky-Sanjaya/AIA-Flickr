import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PhotoCard from '../../component/photoCard/PhotoCard';
import ModalPop from '../../component/modalPop/ModalPop';
import {useNavigation} from '@react-navigation/native';

import styles from './FavoriteScreenStyle';

export default function FavoriteScreen() {
  const [favorite, setFavorite] = useState('');
  const [trigger, setTrigger] = useState('trigger');
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const getFavorite = async () => {
    await AsyncStorage.getItem('favorite')
      .then(item => {
        {
          const parsed = JSON.parse(item);
          setFavorite(parsed);
        }
      })
      .catch(e => {
        throw e;
      });
  };
  function renderHeader() {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.arrowContainer}>
          <Image
            style={styles.arrow}
            resizeMode="contain"
            source={require('../../assets/arrow.png')}
          />
        </TouchableOpacity>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require('../../assets/flickr.png')}
        />
      </View>
    );
  }
  const closeModal = () => {
    setModalVisible(false);
  };

  const deleteFavorite = () => {
    AsyncStorage.removeItem('favorite');
    setTrigger('');
    closeModal();
  };

  function renderMain() {
    const renderItem = ({item}) => {
      return (
        <PhotoCard
          press={() =>
            navigation.navigate('WebViewScreen', {
              url: item.url,
              desc: item.desc,
            })
          }
          text={item.desc == '' ? 'no desc.' : item.desc}
          source={item.url}
        />
      );
    };
    return favorite == null ? (
      <ImageBackground
        resizeMode="cover"
        source={require('../../assets/backgroundImage.png')}
        style={styles.main}>
        <View style={styles.bookmarkContainer}>
          <Text style={styles.text}>Get your's one!</Text>
          <Image
            resizeMode="contain"
            style={styles.bookmark}
            source={require('../../assets/bookmark.png')}
          />
        </View>
      </ImageBackground>
    ) : (
      <ImageBackground
        resizeMode="cover"
        source={require('../../assets/backgroundImage.png')}
        style={styles.main}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Whats on Your Favorite</Text>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.recycleContainer}>
            <Image
              style={styles.recycle}
              source={require('../../assets/recycle-bin.png')}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={favorite}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        <ModalPop
          onBackdropPress={() => closeModal()}
          onBackButtonPress={() => closeModal()}
          yes={() => deleteFavorite()}
          no={() => closeModal()}
          text="Delete all favorite ?"
          visible={modalVisible}
        />
      </ImageBackground>
    );
  }

  useEffect(() => {
    getFavorite();
  }, [trigger]);
  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderMain()}
    </View>
  );
}
