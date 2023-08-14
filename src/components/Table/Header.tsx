/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';

import styles from './styles';
import capitalize from '../../helpers/capitalize';
import {Direction} from './hooks/useSorting';
import {Item} from './index';

import UpDown from '../../icons/up-down.png';

export const renderTableHeader = (
  keys: string[],
  sortByKey: (key: string) => void,
  sortedData?: Item[],
  direction?: Direction,
  sortKey?: string,
) => {
  return (
    <View style={styles.row}>
      {keys.map((key, index) => (
        <Pressable
          key={index}
          style={[
            styles.cell,
            {
              borderRightWidth: index === keys.length - 1 ? 1 : 0,
              borderBottomWidth: sortedData?.length === 0 ? 1 : 0,
            },
          ]}
          onPress={() => sortByKey(key)}>
          <Text>{capitalize(key)}</Text>
          <Image
            source={UpDown}
            style={[
              styles.icon,
              {opacity: direction && sortKey === key ? 1 : 0.5},
            ]}
          />
        </Pressable>
      ))}
    </View>
  );
};
