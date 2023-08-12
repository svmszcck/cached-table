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
  const {direction, key, sortedData, sortByKey} = useSorting(data);
  const {page, setPage, paginatedData, pageSize, changePageSize, pageCount} =
    usePaginate(sortedData);

  if (!data) return;

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Picker pageSize={pageSize} changePageSize={changePageSize} />
        <Search />
      </View>
      <FlatList
        data={paginatedData}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.table}
        ListHeaderComponent={renderTableHeader(
          Object.keys(data[0]),
          paginatedData,
          sortByKey,
          direction,
          key,
        )}
        ListFooterComponent={
          <Pagination
            page={page}
            setPage={setPage}
            paginate={setPage}
            pageSize={pageSize}
            pageCount={pageCount}
          />
        }
        renderItem={({item, index}) =>
          renderTableRow(paginatedData || [], item, index)
        }
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default Table;
