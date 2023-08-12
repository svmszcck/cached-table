/* eslint-disable curly */
import React from 'react';
import {FlatList, View} from 'react-native';
import uuid from 'react-native-uuid';

import {renderTableHeader} from './Header';
import {renderTableRow} from './Row';
import Picker from './Picker';
import Search from './Search';
import Pagination from './Pagination';

import useSorting from './hooks/useSorting';
import usePaginate from './hooks/usePaginate';
import styles from './styles';

export type Limit = {index: number; value: number};

export type Item = {[key: string]: number | string};

type TableProps = {
  data?: Item[];
  limit?: Limit;
};

const Table = ({data, limit}: TableProps) => {
  const {direction, key, sortedData, sortByKey} = useSorting(data);
  const {page, setPage, paginatedData, pageSize, changePageSize, pageCount} =
    usePaginate(sortedData);

  if (!data) return;

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Picker pageSize={pageSize} changePageSize={changePageSize} />
        <Search onSearch={() => {}} />
      </View>
      <FlatList
        data={paginatedData}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.table}
        ListHeaderComponent={renderTableHeader(
          Object.keys(data[0]),
          sortByKey,
          paginatedData,
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
          renderTableRow(paginatedData || [], item, index, limit)
        }
        keyExtractor={() => uuid.v4().toString()}
      />
    </View>
  );
};

export default Table;
