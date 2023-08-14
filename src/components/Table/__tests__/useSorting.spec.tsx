import 'react-native';
import {renderHook} from '@testing-library/react-hooks';

import useSorting from '../hooks/useSorting';

const data = [
  {name: 'Onur', age: 32},
  {name: 'Michael', age: 45},
  {name: 'Maria', age: 27},
];

describe('useSorting hook', () => {
  it('sort same column continuously', async () => {
    const {result} = renderHook(() => useSorting(data));

    result.current.sortByKey('age');

    expect(result.current.sortedData).toEqual([
      {name: 'Maria', age: 27},
      {name: 'Onur', age: 32},
      {name: 'Michael', age: 45},
    ]);

    result.current.sortByKey('age');

    expect(result.current.sortedData).toEqual([
      {name: 'Michael', age: 45},
      {name: 'Onur', age: 32},
      {name: 'Maria', age: 27},
    ]);

    result.current.sortByKey('age');

    expect(result.current.sortedData).toEqual(data);
  });

  it('sort different columnns', async () => {
    const {result} = renderHook(() => useSorting(data));

    result.current.sortByKey('name');

    expect(result.current.sortedData).toEqual([
      {name: 'Maria', age: 27},
      {name: 'Michael', age: 45},
      {name: 'Onur', age: 32},
    ]);

    result.current.sortByKey('age');

    expect(result.current.sortedData).toEqual([
      {name: 'Maria', age: 27},
      {name: 'Onur', age: 32},
      {name: 'Michael', age: 45},
    ]);
  });
});
