import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { TableWrapper } from './TableWrapper';
export function useTableWrapper() {
    const [sortDescriptor, setSortDescriptor] = useState({
        column: 'id',
        direction: 'descending',
    });
    const [pageDescriptor, setPageDescriptor] = useState({
        page: 1,
        pageSize: 50,
    });
    const TableWrapperComponent = (props) => {
        return (_jsx(TableWrapper, { ...props, sortDescriptor: sortDescriptor, setSortDescriptor: setSortDescriptor, pageDescriptor: pageDescriptor, setPageDescriptor: setPageDescriptor }));
    };
    return {
        TableWrapperComponent,
        sortDescriptor,
        setSortDescriptor,
        pageDescriptor,
        setPageDescriptor,
    };
}
