/* eslint-disable curly */
import React from 'react';
import {FlatList, View} from 'react-native';

import {renderTableHeader} from './Header';
import {renderTableRow} from './Row';
import Picker from './Picker';
import Search from './Search';
import Pagination from './Pagination';

import useSorting from './hooks/useSorting';
import usePaginate from './hooks/usePaginate';
import {User} from '../../services/HttpClient';
import styles from './styles';

type TableProps = {
  data?: User[];
};

const Table = ({data}: TableProps) => {
  const {page, setPage, paginatedData, pageSize, changePageSize} =
    usePaginate(data);
  const {direction, key, sortedData, sortByKey} = useSorting(paginatedData);

  if (!data) return;

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Picker pageSize={pageSize} changePageSize={changePageSize} />
        <Search />
      </View>
      <FlatList
        data={sortedData}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={renderTableHeader(
          Object.keys(data[0]),
          sortedData,
          sortByKey,
          direction,
          key,
        )}
        renderItem={({item, index}) =>
          renderTableRow(sortedData || [], item, index)
        }
        keyExtractor={item => item.name}
      />
      <Pagination page={page} paginate={setPage} />
    </View>
  );
};

export default Table;
