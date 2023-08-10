/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, View, Text, Dimensions, StyleSheet} from 'react-native';

import {User} from '../services/HttpClient';
import capitalize from '../helpers/capitalize';

const width = Dimensions.get('window').width;

type TableProps = {
  data?: User[];
};

const renderTableHeader = (data: User[]) => {
  const keys = Object.keys(data[0]);

  return (
    <View style={{flexDirection: 'row'}}>
      {keys.map((key, index) => (
        <View
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

const renderTableRow = (data: User[], item: User, index: number) => {
  const values = Object.values(item);

  return (
    <View style={{flexDirection: 'row'}}>
      {values.map((value, index2) => (
        <View
          style={[
            styles.cell,
            {
              borderBottomWidth: index === data.length - 1 ? 1 : 0,
              borderRightWidth: index2 === values.length - 1 ? 1 : 0,
            },
          ]}>
          <Text>{value}</Text>
        </View>
      ))}
    </View>
  );
};

const Table = ({data}: TableProps) => {
  if (!data) return;

  return (
    <View style={[styles.container, {minWidth: width - 40}]}>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={renderTableHeader(data)}
        renderItem={({item, index}) => renderTableRow(data, item, index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 300,
    backgroundColor: '#fff',
    flex: 1,
  },
  cell: {
    borderWidth: 1,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderColor: '#ddd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});

export default Table;
