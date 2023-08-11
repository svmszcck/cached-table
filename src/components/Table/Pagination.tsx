import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

import colors from '../../constants/colors';

import ArrowRight from '../../icons/arrow-right.png';

type PaginationProps = {
  page: number;
  paginate: (page: number) => void;
};

const Pagination = ({paginate}: PaginationProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={() => paginate(1)}>
        <Text style={styles.value}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => paginate(2)}>
        <Text style={styles.value}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Image source={ArrowRight} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 'auto',
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
