/* eslint-disable curly */
import React from 'react';
import {FlatList, View, Dimensions, StyleSheet} from 'react-native';

import {renderTableHeader} from './Header';
import {renderTableRow} from './Row';
import Picker from './Picker';
import Search from './Search';
import Pagination from './Pagination';

import useSorting from './hooks/useSorting';
import usePaginate from './hooks/usePaginate';
import {User} from '../../services/HttpClient';
import Colors from '../../constants/colors';

const width = Dimensions.get('window').width;

type TableProps = {
  data?: User[];
};

const Table = ({data}: TableProps) => {
  const {page, setPage, paginatedData} = usePaginate(data);
  const {sortedData, sortByKey} = useSorting(paginatedData);

  if (!data) return;

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Picker />
        <Search />
      </View>
      <FlatList
        data={sortedData}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={renderTableHeader(data, sortByKey)}
        renderItem={({item, index}) => renderTableRow(data, item, index)}
        keyExtractor={item => item.name}
      />
      <Pagination page={page} paginate={setPage} />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    minWidth: width - 40,
    backgroundColor: Colors.white,
    maxHeight: 500,
  },
  cell: {
    flexDirection: 'row',
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
  icon: {
    width: 13,
    height: 13,
    marginLeft: 5,
    opacity: 0.5,
  },
});

export default Table;
