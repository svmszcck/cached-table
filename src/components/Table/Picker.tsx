import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

import ArrowDown from '../../icons/arrow-down.png';
import Colors from '../../constants/colors';

const Picker = () => {
  return (
    <View style={styles.container}>
      <Text>10 per page</Text>
      <Image source={ArrowDown} style={styles.icon} />
    </View>
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
