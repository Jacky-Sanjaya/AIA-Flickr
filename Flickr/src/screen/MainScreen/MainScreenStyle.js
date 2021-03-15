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
    backgroundColor: '#aaaa',
  },
  main: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default styles;
