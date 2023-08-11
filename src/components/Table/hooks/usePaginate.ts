/* eslint-disable curly */
import {useCallback, useEffect, useState} from 'react';

const usePaginate = (data: any[] | undefined) => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [paginatedData, setPaginatedData] = useState<any[]>();

  const paginate = useCallback(
    (array: any[], size: number, pageNumber: number): any[] => {
      setPage(pageNumber);
      return array.slice((pageNumber - 1) * size, pageNumber * size);
    },
    [],
  );

  const changePageSize = () => {
    if (pageSize === 10) setPageSize(20);
    else if (pageSize === 20) setPageSize(30);
    else if (pageSize === 30) setPageSize(40);
    else if (pageSize === 40) setPageSize(50);
    else if (pageSize === 50) setPageSize(10);
  };

  useEffect(() => {
    if (!data) return;

    const newPaginatedData = paginate(data, pageSize, page);

    setPaginatedData(newPaginatedData);
  }, [data, paginate, page, pageSize]);

  return {
    page,
    setPage,
    paginate,
    paginatedData,
    setPaginatedData,
    pageSize,
    changePageSize,
  };
};

export default usePaginate;
