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
    alignItems: 'center',
    margin: responsiveWidth(5),
    paddingHorizontal: responsiveWidth(2),
    flexDirection: 'collumn',
    backgroundColor: 'gray',
    borderRadius: 20,
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
