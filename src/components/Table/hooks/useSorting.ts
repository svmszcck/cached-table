/* eslint-disable curly */
import {useState, useMemo} from 'react';

export type Direction = 'asc' | 'desc';

const useSorting = (paginatedData: any[] | undefined) => {
  const [direction, setDirection] = useState<Direction>();
  const [key, setKey] = useState<string>();

  const sortedData = useMemo(() => {
    if (!paginatedData) return;
    if (!key || !direction) return paginatedData;

    const result = paginatedData.sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return +1;

      return 0;
    });

    return result;
  }, [paginatedData, direction, key]);

  const sortByKey = (newKey: string) => {
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
