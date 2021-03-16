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

    borderWidth: 0,
    borderTopLeftRadius: 10,
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  desc: {
    width: responsiveWidth(75),
    height: responsiveHeight(5),
    paddingHorizontal: responsiveWidth(3),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#40394a',
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: responsiveFontSize(2),
    color: '#bbbbbb',
  },
});

export default styles;
