import React from 'react';
import { type SortDescriptor } from '@nextui-org/react';
import { type PageDescriptor, type TableWrapperProps } from './TableWrapper';
export interface UseTableWrapperParams {
    defaultSortDescriptor?: SortDescriptor;
    defaultPageDescriptor?: PageDescriptor;
}
export declare function useTableWrapper<T>({ defaultSortDescriptor, defaultPageDescriptor, }?: UseTableWrapperParams): {
    TableWrapperComponent: React.FC<TableWrapperProps<T>>;
    sortDescriptor: SortDescriptor;
    setSortDescriptor: React.Dispatch<React.SetStateAction<SortDescriptor>>;
    pageDescriptor: PageDescriptor;
    setPageDescriptor: React.Dispatch<React.SetStateAction<PageDescriptor>>;
};
