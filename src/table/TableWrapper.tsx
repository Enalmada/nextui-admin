import React from 'react';
import {
  Button,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  type TableColumnProps as NextUITableColumnProps,
  type TableProps as NextUITableProps,
  type SortDescriptor,
} from '@nextui-org/react';
import { type TableBodyProps } from '@nextui-org/table/dist/base/table-body';

export interface PageDescriptor {
  page: number;
  pageSize: number;
}

type SetSortDescriptor = (sortDescriptor: SortDescriptor) => void;
type SetPageDescriptor = (pageDescriptor: PageDescriptor) => void;

export interface TableColumnProps<T> extends Omit<NextUITableColumnProps<T>, 'children'> {
  key: string;
  header?: string | React.ReactElement;
  renderCell?: (item: T) => React.ReactNode;
}

export interface TableProps extends NextUITableProps {
  setSortDescriptor?: SetSortDescriptor;
  linkFunction: (key: React.Key) => void;
}

export interface PaginationProps {
  pageDescriptor?: PageDescriptor;
  setPageDescriptor?: SetPageDescriptor;
  hasMore?: boolean;
}

export interface TableWrapperProps<T> {
  tableProps: TableProps;
  columnProps: TableColumnProps<T>[];
  bodyProps: TableBodyProps<T>;
  paginationProps: PaginationProps;
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const TableWrapper = <T extends unknown>(
  props: TableWrapperProps<T>
): React.ReactElement => {
  const { tableProps, columnProps, bodyProps, paginationProps } = props;

  const handleSortChange = (sortDescriptor: SortDescriptor) => {
    if (tableProps.setSortDescriptor) {
      tableProps.setSortDescriptor(sortDescriptor);
    }
  };

  const columnPropsMap = new Map(columnProps.map((c) => [c.key, c]));

  return (
    <div className=" flex w-full flex-col gap-4">
      <Table
        {...tableProps}
        onSortChange={(sortDescriptor: SortDescriptor) => {
          // If tableProps.onSortChange is defined, call it with sortDescriptor
          if (tableProps.onSortChange) {
            tableProps.onSortChange(sortDescriptor);
          } else {
            // Otherwise, call the internal handleSortChange function
            handleSortChange(sortDescriptor);
          }
        }}
        aria-label={tableProps['aria-label'] || 'Table for model rows'}
        selectionMode={tableProps.selectionMode || 'single'}
        onRowAction={(key) => tableProps.linkFunction(key)}
      >
        <TableHeader columns={columnProps}>
          {(column) => (
            <TableColumn
              {...columnProps}
              key={column.key}
              hideHeader={column.key === 'actions'}
              align={column.align || 'start'}
            >
              {column.header || column.key}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          {...bodyProps}
          items={bodyProps.items || []}
          emptyContent={bodyProps.items ? bodyProps.emptyContent : ' '}
          isLoading={bodyProps.isLoading}
          loadingContent={bodyProps.loadingContent || <Spinner label="Loading..." />}
        >
          {(item: T) => (
            <TableRow>
              {(columnKey: React.Key) => {
                // Retrieve the columnProp from the map
                const columnProp = columnPropsMap.get(columnKey as string);

                // Check if columnProp has a render method
                if (columnProp && columnProp.renderCell) {
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  return <TableCell>{columnProp.renderCell(item)}</TableCell>;
                }

                // Default fallback if no render method or columnProp not found
                return (
                  <TableCell>{(item as Record<string, string>)[columnKey as string]}</TableCell>
                );
              }}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="mb-3 mt-3 flex items-center justify-center gap-2">
        <Button
          size="sm"
          variant="flat"
          color="secondary"
          isDisabled={paginationProps.pageDescriptor?.page === 1}
          onPress={() => {
            if (paginationProps.pageDescriptor && paginationProps.setPageDescriptor) {
              const page =
                paginationProps.pageDescriptor.page > 1
                  ? paginationProps.pageDescriptor.page - 1
                  : paginationProps.pageDescriptor.page;
              paginationProps.setPageDescriptor({ ...paginationProps.pageDescriptor, page });
            }
          }}
        >
          Previous
        </Button>
        <div className="flex items-center text-gray-400">
          {paginationProps.pageDescriptor?.page}
        </div>
        <Button
          size="sm"
          variant="flat"
          color="secondary"
          isDisabled={paginationProps.hasMore === false}
          onPress={() => {
            if (paginationProps.pageDescriptor && paginationProps.setPageDescriptor) {
              const page = paginationProps.pageDescriptor.page + 1;
              paginationProps.setPageDescriptor({ ...paginationProps.pageDescriptor, page });
            }
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
