/* eslint-disable react-native/no-inline-styles */
/* eslint-disable curly */
import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

import colors from '../../constants/colors';

import ArrowLeft from '../../icons/arrow-left.png';
import ArrowRight from '../../icons/arrow-right.png';

type PaginationProps = {
  page: number;
  setPage: (page: number) => void;
  paginate: (page: number) => void;
  pageSize: number;
  pageCount?: number;
};

type Modify = 'down' | 'up';

const Pagination = ({page, setPage, paginate, pageCount}: PaginationProps) => {
  const isLastPage = page === pageCount;

  const handleArrow = (type: Modify): void => {
    if (type === 'down') {
      if (page === 1) return;
      setPage(page - 1);
    } else if (type === 'up') {
      if (page === pageCount) return;
      setPage(page + 1);
    }
  };

  return (
    <View style={styles.container}>
      {pageCount && pageCount > 1 && (
        <TouchableOpacity
          style={[styles.item, {}]}
          onPress={() => paginate(isLastPage ? page - 1 : page)}>
          <Text style={[styles.value, {opacity: isLastPage ? 0.4 : 1}]}>
            {isLastPage ? page - 1 : page}
          </Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={[styles.item]}
        onPress={() => paginate(isLastPage ? page : page + 1)}>
        <Text style={[styles.value, {opacity: isLastPage ? 1 : 0.4}]}>
          {isLastPage ? page : page + 1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => handleArrow('down')}>
        <Image source={ArrowLeft} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => handleArrow('up')}>
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
