/* eslint-disable curly */
import React from 'react';
import {FlatList, View, Dimensions, StyleSheet} from 'react-native';

import {renderTableHeader} from './Header';
import {renderTableRow} from './Row';
import Picker from './Picker';
import Search from './Search';
import Pagination from './Pagination';

import {User} from '../../services/HttpClient';
import Colors from '../../constants/colors';

const width = Dimensions.get('window').width;

type TableProps = {
  data?: User[];
};

const Table = ({data}: TableProps) => {
  if (!data) return;

  return (
    <View style={[styles.container, {minWidth: width - 40}]}>
      <View style={styles.topSection}>
        <Picker />
        <Search />
      </View>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={renderTableHeader(data)}
        renderItem={({item, index}) => renderTableRow(data, item, index)}
        keyExtractor={item => item.name}
      />
      <Pagination />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 300,
    backgroundColor: Colors.white,
    flex: 1,
  },
  cell: {
    borderWidth: 1,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderColor: Colors.gray,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  topSection: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
});

export default Table;
