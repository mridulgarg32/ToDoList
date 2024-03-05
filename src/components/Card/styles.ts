import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: 10,
    margin: 10,
    // elevation: 1,
  },
  containerWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {color: 'white', fontWeight: 'bold', fontSize: 14},
  description: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
  },
  editIcon: {height: 20, width: 20},
});
export default styles;
