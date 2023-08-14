import 'react-native';
import {renderHook} from '@testing-library/react-hooks';

import usePaginate from '../hooks/usePaginate';

const data = [
  {name: 'Onur', age: 32},
  {name: 'Michael', age: 45},
  {name: 'Maria', age: 27},
  {name: 'John', age: 65},
  {name: 'Merve', age: 22},
  {name: 'Mehmet', age: 44},
  {name: 'Ahmet', age: 30},
  {name: 'Ricardo', age: 46},
  {name: 'Aylin', age: 36},
  {name: 'Sandra', age: 30},
  {name: 'Vilma', age: 27},
  {name: 'Emine', age: 42},
];

describe('usePaginate hook', () => {
  it('paginate data correctly', async () => {
    const {result, waitForNextUpdate} = renderHook(() => usePaginate(data));

    expect(result.current.pageCount).toEqual(2);
    expect(result.current.paginatedData).toEqual(data.slice(0, 10));

    result.current.setPage(2);

    await waitForNextUpdate();

    expect(result.current.paginatedData).toEqual(data.slice(10));
  });

  it('change page size correctly', async () => {
    const {result, waitForNextUpdate} = renderHook(() => usePaginate(data));

    result.current.changePageSize();

    await waitForNextUpdate();

    expect(result.current.pageSize).toEqual(20);
    expect(result.current.pageCount).toEqual(1);
    expect(result.current.paginatedData).toEqual(data);
  });
});
