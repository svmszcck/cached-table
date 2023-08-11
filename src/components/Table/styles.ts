import {Dimensions, StyleSheet} from 'react-native';

import Colors from '../../constants/colors';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minWidth: width - 40,
    backgroundColor: Colors.white,
    maxHeight: 500,
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
