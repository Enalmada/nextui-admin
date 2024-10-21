import { type TableColumnProps as NextUITableColumnProps, type TableProps as NextUITableProps, type SortDescriptor } from "@nextui-org/react";
import type { TableBodyProps } from "@nextui-org/table/dist/base/table-body";
import type { Key, ReactElement, ReactNode } from "react";
export interface PageDescriptor {
    page: number;
    pageSize: number;
}
type SetSortDescriptor = (sortDescriptor: SortDescriptor) => void;
type SetPageDescriptor = (pageDescriptor: PageDescriptor) => void;
export interface TableColumnProps<T> extends Omit<NextUITableColumnProps<T>, "children"> {
    key: string;
    header?: string | ReactElement | null;
    renderCell?: (item: T) => ReactNode;
}
export interface TableProps extends NextUITableProps {
    setSortDescriptor?: SetSortDescriptor;
    linkFunction: (key: Key) => void;
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
export declare const TableWrapper: <T>(props: TableWrapperProps<T>) => ReactElement;
export {};
