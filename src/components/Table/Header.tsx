/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';
import {User} from '../../services/HttpClient';
import capitalize from '../../helpers/capitalize';
import {Direction} from './hooks/useSorting';

import UpDown from '../../icons/up-down.png';

export const renderTableHeader = (
  keys: string[],
  sortedData: User[] | undefined,
  sortByKey: (key: string) => void,
  direction: Direction | undefined,
  sortKey: string | undefined,
) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {keys.map((key, index) => (
        <View
          key={index}
          style={[
            styles.cell,
            {
              borderRightWidth: index === keys.length - 1 ? 1 : 0,
              borderBottomWidth: sortedData?.length === 0 ? 1 : 0,
            },
          ]}>
          <Text onPress={() => sortByKey(key)}>{capitalize(key)}</Text>
          <Image
            source={UpDown}
            style={[
              styles.icon,
              {opacity: direction && sortKey === key ? 1 : 0.5},
            ]}
          />
        </View>
      ))}
    </View>
  );
};
