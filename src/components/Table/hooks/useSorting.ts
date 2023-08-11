/* eslint-disable curly */
import {useState, useMemo} from 'react';

export type Direction = 'asc' | 'desc';

const useSorting = (paginatedData: any[] | undefined) => {
  const [direction, setDirection] = useState<Direction>();
  const [key, setKey] = useState<string>();

  const sortedData = useMemo(() => {
    if (!paginatedData) return;
    if (!key || !direction) return paginatedData;

    const result = [...paginatedData].sort((a, b) => {
      const isAscending = direction === 'asc';

      if (a[key] < b[key]) return isAscending ? -1 : +1;
      if (a[key] > b[key]) return isAscending ? +1 : -1;

      return 0;
    });

    return result;
  }, [paginatedData, direction, key]);

  const sortByKey = (newKey: string): void => {
    setKey(newKey);

    if (!direction) {
      setDirection('asc');
    } else if (direction === 'asc') {
      setDirection('desc');
    } else if (direction === 'desc') {
      setDirection(undefined);
    }
  };

  return {direction, setDirection, key, setKey, sortByKey, sortedData};
};

export default useSorting;
