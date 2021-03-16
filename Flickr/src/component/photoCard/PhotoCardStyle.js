import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: responsiveWidth(75),
    margin: responsiveWidth(2.5),
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: responsiveWidth(75),
  },
  desc: {
    width: responsiveWidth(75),
    height: responsiveHeight(5),
    paddingHorizontal: responsiveWidth(3),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: responsiveFontSize(2),
  },
});

export default styles;
