/* eslint-disable curly */
import {useState, useMemo} from 'react';

export type Direction = 'asc' | 'desc';

const useSorting = (data: any[] | undefined) => {
  const [direction, setDirection] = useState<Direction>();
  const [key, setKey] = useState<string>();

  const sortedData = useMemo(() => {
    if (!data) return;
    if (!key || !direction) return data;

    const result = [...data].sort((a, b) => {
      const isAscending = direction === 'asc';

      if (a[key] < b[key]) return isAscending ? -1 : +1;
      if (a[key] > b[key]) return isAscending ? +1 : -1;

      return 0;
    });

    return result;
  }, [data, direction, key]);

  const sortByKey = (newKey: string): void => {
    if (key !== newKey) {
      setKey(newKey);
      setDirection('asc');
    }

    if (!direction || key !== newKey) {
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
