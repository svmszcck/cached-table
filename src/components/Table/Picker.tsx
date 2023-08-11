import React from 'react';
import {Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

import ArrowDown from '../../icons/arrow-down.png';
import Colors from '../../constants/colors';

type PickerProps = {
  pageSize: number;
  changePageSize: () => void;
};

const Picker = ({pageSize, changePageSize}: PickerProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={changePageSize}>
      <Text>{pageSize} per page</Text>
      <Image source={ArrowDown} style={styles.icon} />
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: Colors.gray,
    borderWidth: 1,
    padding: 10,
    width: 150,
  },
  icon: {
    width: 15,
    height: 15,
    marginLeft: 'auto',
  },
});

export default Picker;
