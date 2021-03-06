import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: responsiveHeight(7),
    backgroundColor: '#40394a',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: responsiveWidth(20),
    height: responsiveHeight(7),
    left: responsiveWidth(7.5),
    alignSelf: 'center',
  },
  favoriteContainer: {
    left: responsiveWidth(30),
  },
  favorite: {
    width: responsiveWidth(16),
    height: responsiveHeight(4),
    transform: [{scaleX: -1}],
  },
  main: {
    alignItems: 'center',
  },
});

export default styles;
