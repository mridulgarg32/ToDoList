import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  roundedStyle: {
    borderRadius: 60 / 2,
    height: 60,
    width: 60,
  },
  defaultStyle: {
    width: '100%',
    padding: 10,
  },
  title: {color: 'white', fontSize: 14},
});
export default styles;
