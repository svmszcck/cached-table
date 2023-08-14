/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text} from 'react-native';

import {Limit, Item} from './index';
import styles from './styles';

import Warning from '../../icons/warning.png';

export const renderTableRow = (
  sortedData: Item[],
  item: Item,
  index: number,
  limit?: Limit,
) => {
  const values = Object.values(item);

  const hasWarning = (value: number, column: number): boolean => {
    if (!limit) return false;

    return limit && column === limit.index && value > limit.value;
  };

  return (
    <View style={styles.row}>
      {values.map((value, column) => (
        <View
          key={column}
          style={[
            styles.cell,
            {
              borderBottomWidth: index === sortedData.length - 1 ? 1 : 0,
              borderRightWidth: column === values.length - 1 ? 1 : 0,
            },
          ]}>
          {typeof value === 'number' && hasWarning(value, column) ? (
            <Image source={Warning} style={[styles.icon]} />
          ) : (
            <Text>{value}</Text>
          )}
        </View>
      ))}
    </View>
  );
};
