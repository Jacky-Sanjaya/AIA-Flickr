import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import Svg, {Path} from 'react-native-svg';
import MainScreen from '../../screen/MainScreen/MainScreen';
import SearchScreen from '../../screen/searchScreen/SearchScreen';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const TabBarCustomButton = ({accessibilityState, children, onPress}) => {
    var isSelected = accessibilityState.selected;

    if (isSelected) {
      return (
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={{flexDirection: 'row', position: 'absolute', top: 0}}>
            <View style={{flex: 1, backgroundColor: '#fff'}}></View>
            <Svg width={75} height={61} viewBox="0 0 75 61">
              <Path
                d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                fill={'#fff'}
              />
            </Svg>
            <View style={{flex: 1, backgroundColor: '#fff'}}></View>
          </View>

          <TouchableOpacity
            style={{
              top: responsiveHeight(-3),
              justifyContent: 'center',
              alignItems: 'center',
              width: responsiveWidth(12.5),
              height: responsiveHeight(6.5),
              borderRadius: 25,
              backgroundColor: '#fff',
            }}
            onPress={onPress}>
            {children}
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            height: responsiveHeight(7),
            backgroundColor: '#fff',
          }}
          activeOpacity={1}
          onPress={onPress}>
          {children}
        </TouchableOpacity>
      );
    }
  };

  const CustomTabBar = props => {
    return (
      <View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: responsiveHeight(2),
            backgroundColor: '#fff',
          }}></View>
        <BottomTabBar {...props.props} />
      </View>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="MainScreen"
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          left: 0,
          bottom: 0,
          right: 0,
          borderTopWidth: 0,
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}
      tabBar={props => <CustomTabBar props={props} />}>
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/home.png')}
              resizeMode="contain"
              style={{
                width: responsiveWidth(7.5),
                height: responsiveHeight(7.5),
                borderRadius: 25,
                tintColor: focused ? '#000000' : '#bbbbbb',
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/search.png')}
              resizeMode="contain"
              style={{
                width: responsiveWidth(7),
                height: responsiveHeight(7),
                tintColor: focused ? '#000000' : '#bbbbbb',
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}
