/* eslint-disable curly */
import {useCallback, useEffect, useState} from 'react';

const usePaginate = (data: any[] | undefined) => {
  const [page, setPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState<any[]>();

  const paginate = useCallback(
    (array: any[], pageSize: number, pageNumber: number): any[] => {
      setPage(pageNumber);
      return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
    },
    [],
  );

  useEffect(() => {
    if (!data) return;

    const newPaginatedData = paginate(data, 10, page);

    console.log(newPaginatedData);

    setPaginatedData(newPaginatedData);
  }, [data, paginate, page]);

  return {page, setPage, paginate, paginatedData, setPaginatedData};
};

export default usePaginate;
