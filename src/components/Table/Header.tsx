/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './index';
import {User} from '../../services/HttpClient';
import capitalize from '../../helpers/capitalize';

import UpDown from '../../icons/up-down.png';

export const renderTableHeader = (
  data: User[],
  sortByKey: (key: string) => void,
) => {
  const keys = Object.keys(data[0]);

  return (
    <View style={{flexDirection: 'row'}}>
      {keys.map((key, index) => (
        <View
          key={index}
          style={[
            styles.cell,
            {
              borderRightWidth: index === keys.length - 1 ? 1 : 0,
            },
          ]}>
          <Text onPress={() => sortByKey(key)}>{capitalize(key)}</Text>
          <Image source={UpDown} style={styles.icon} />
        </View>
      ))}
    </View>
  );
};
