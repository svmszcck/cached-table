import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import colors from '../../constants/colors';

import ArrowRight from '../../icons/arrow-right.png';

const Pagination = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.value}>1</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.value}>2</Text>
      </View>
      <View style={styles.item}>
        <Image source={ArrowRight} style={styles.icon} />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    backgroundColor: colors.gray,
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  value: {
    fontSize: 15,
  },
  icon: {
    width: 12,
    height: 12,
  },
});

export default Pagination;
