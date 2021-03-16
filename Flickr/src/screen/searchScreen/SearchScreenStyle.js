import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    margin: responsiveWidth(5),
    paddingHorizontal: responsiveWidth(2),
    flexDirection: 'row',
    backgroundColor: '#40394a',
    borderRadius: 20,
    opacity: 0.8,
  },
  textInput: {
    width: responsiveWidth(75),
    marginRight: responsiveWidth(2),
  },
  search: {
    width: responsiveWidth(7),
    height: responsiveHeight(3),
  },
});

export default styles;
