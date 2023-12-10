import React from 'react';
import { type TableColumnProps as NextUITableColumnProps, type TableProps as NextUITableProps, type SortDescriptor } from '@nextui-org/react';
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
export declare const TableWrapper: <T extends unknown>(props: TableWrapperProps<T>) => React.ReactElement;
export {};
