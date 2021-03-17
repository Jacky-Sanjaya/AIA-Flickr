import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
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
    alignSelf: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: responsiveHeight(2),
  },
  text: {
    fontSize: responsiveFontSize(3),
    marginRight: responsiveWidth(5),
    fontFamily: 'SourceSansPro-Bold',
  },
  main: {
    flex: 1,
    alignItems: 'center',
  },
  recycleContainer: {
    width: responsiveWidth(10),
    height: responsiveHeight(4),
  },
  recycle: {
    width: responsiveWidth(10),
    height: responsiveHeight(4),
  },
});

export default styles;
