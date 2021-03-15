import {StyleSheet} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: responsiveWidth(45),
    margin: responsiveWidth(2.5),
  },
  image: {
    width: responsiveWidth(45),
  },
});

export default styles;
