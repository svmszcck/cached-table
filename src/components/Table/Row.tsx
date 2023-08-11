/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

import {User} from '../../services/HttpClient';
import styles from './styles';

export const renderTableRow = (
  sortedData: User[],
  item: User,
  index: number,
) => {
  const values = Object.values(item);

  return (
    <View style={{flexDirection: 'row'}}>
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
          <Text>{value}</Text>
        </View>
      ))}
    </View>
  );
};
