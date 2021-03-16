import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
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
  },
  logo: {
    width: responsiveWidth(20),
    height: responsiveHeight(7),
  },
});

export default styles;
