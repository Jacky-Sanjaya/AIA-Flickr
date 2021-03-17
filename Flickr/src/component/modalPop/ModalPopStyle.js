import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(20),
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonYes: {
    marginHorizontal: responsiveWidth(5),
    marginVertical: responsiveHeight(3),
    width: responsiveWidth(15),
    height: responsiveHeight(4),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0278ae',
  },
  buttonNo: {
    marginHorizontal: responsiveWidth(5),
    marginVertical: responsiveHeight(3),
    width: responsiveWidth(15),
    height: responsiveHeight(4),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ec4646',
  },
  text: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
});

export default styles;
