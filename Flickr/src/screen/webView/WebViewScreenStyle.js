import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  stylBefore: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleAfter: {
    flex: 1,
  },
  webViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  header: {
    height: responsiveHeight(7),
    backgroundColor: '#40394a',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  text: {
    fontSize: responsiveScreenFontSize(2.5),
    color: '#bbbb',
    fontFamily: 'SourceSansPro-Black',
  },
  love: {
    width: responsiveWidth(10),
    height: responsiveHeight(3),
  },
  logo: {
    width: responsiveWidth(20),
    height: responsiveHeight(7),
  },
});

export default styles;
