import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, } from '@nextui-org/react';
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const TableWrapper = (props) => {
    const { columns, items, renderRow, emptyContent, sortDescriptor, setSortDescriptor, pageDescriptor, setPageDescriptor, hasMore, isLoading, linkFunction, } = props;
    const handleSortChange = (sortDescriptor) => {
        if (setSortDescriptor) {
            setSortDescriptor(sortDescriptor);
        }
    };
    return (_jsxs("div", { className: " flex w-full flex-col gap-4", children: [_jsxs(Table, { sortDescriptor: sortDescriptor, onSortChange: (sortDescriptor) => handleSortChange(sortDescriptor), "aria-label": "Table for model rows", selectionMode: "single", onRowAction: (key) => linkFunction(key), children: [_jsx(TableHeader, { columns: columns, children: (column) => (_jsx(TableColumn, { hideHeader: column.key === 'actions', align: column.align === 'center' ? 'center' : 'start', allowsSorting: column.allowsSorting, children: column.label }, column.key)) }), _jsx(TableBody, { items: items || [], emptyContent: items ? emptyContent : ' ', isLoading: isLoading, loadingContent: _jsx(Spinner, { label: "Loading..." }), children: (item) => (_jsx(TableRow, { children: (columnKey) => (
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                            _jsx(TableCell, { children: renderRow({ item: item, columnKey: columnKey }) })) })) })] }), _jsxs("div", { className: "mb-3 mt-3 flex items-center justify-center gap-2", children: [_jsx(Button, { size: "sm", variant: "flat", color: "secondary", isDisabled: pageDescriptor?.page === 1, onPress: () => {
                            if (pageDescriptor && setPageDescriptor) {
                                const page = pageDescriptor.page > 1 ? pageDescriptor.page - 1 : pageDescriptor.page;
                                setPageDescriptor({ ...pageDescriptor, page });
                            }
                        }, children: "Previous" }), _jsx("div", { className: "flex items-center text-gray-400", children: pageDescriptor?.page }), _jsx(Button, { size: "sm", variant: "flat", color: "secondary", isDisabled: hasMore === false, onPress: () => {
                            if (pageDescriptor && setPageDescriptor) {
                                const page = pageDescriptor.page + 1;
                                setPageDescriptor({ ...pageDescriptor, page });
                            }
                        }, children: "Next" })] })] }));
};
