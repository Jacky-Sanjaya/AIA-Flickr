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
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: responsiveWidth(20),
    height: responsiveHeight(7),
    marginRight: responsiveWidth(40),
  },
  arrowContainer: {
    width: responsiveWidth(12),
    height: responsiveHeight(4),
    marginLeft: responsiveWidth(5),
  },
  arrow: {
    width: responsiveWidth(12),
    height: responsiveHeight(4),
    tintColor: '#DF6E57',
    transform: [{scaleX: -1}],
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: responsiveHeight(2),
  },
  text: {
    fontSize: responsiveFontSize(3),
    marginRight: responsiveWidth(3),
    fontFamily: 'SourceSansPro-Bold',
  },
  bookmarkContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: responsiveHeight(5),
  },
  bookmark: {
    width: responsiveWidth(20),
    height: responsiveHeight(7),
    marginTop: responsiveHeight(5),
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
