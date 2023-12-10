import React, { useState } from 'react';
import { type SortDescriptor } from '@nextui-org/react';

import { TableWrapper, type PageDescriptor, type TableWrapperProps } from './TableWrapper';

export function useTableWrapper<T>() {
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: 'id',
    direction: 'descending',
  });

  const [pageDescriptor, setPageDescriptor] = useState<PageDescriptor>({
    page: 1,
    pageSize: 50,
  });

  const TableWrapperComponent: React.FC<TableWrapperProps<T>> = (props) => {
    return (
      <TableWrapper<T>
        {...props}
        paginationProps={{
          pageDescriptor: pageDescriptor,
          setPageDescriptor: setPageDescriptor,
          hasMore: props.paginationProps.hasMore,
        }}
        tableProps={{
          ...props.tableProps,
          sortDescriptor: sortDescriptor,
          setSortDescriptor: setSortDescriptor,
        }}
      />
    );
  };

  return {
    TableWrapperComponent,
    sortDescriptor,
    setSortDescriptor,
    pageDescriptor,
    setPageDescriptor,
  };
}
