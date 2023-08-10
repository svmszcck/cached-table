/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './index';
import {User} from '../../services/HttpClient';
import capitalize from '../../helpers/capitalize';

export const renderTableHeader = (data: User[]) => {
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
          <Text>{capitalize(key)}</Text>
        </View>
      ))}
    </View>
  );
};
