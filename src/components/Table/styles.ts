import {Dimensions, StyleSheet} from 'react-native';

import Colors from '../../constants/colors';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.white,
    height,
  },
  table: {
    marginBottom: 50,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flexDirection: 'row',
    borderWidth: 1,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderColor: Colors.gray,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  topSection: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  icon: {
    width: 13,
    height: 13,
    marginLeft: 5,
  },
});

export default styles;
