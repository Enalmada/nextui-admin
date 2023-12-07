import React from 'react';
import { Button, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, } from '@nextui-org/react';
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const TableWrapper = (props) => {
    const { columns, items, renderRow, emptyContent, sortDescriptor, setSortDescriptor, pageDescriptor, setPageDescriptor, hasMore, isLoading, linkFunction, } = props;
    const handleSortChange = (sortDescriptor) => {
        if (setSortDescriptor) {
            setSortDescriptor(sortDescriptor);
        }
    };
    return (React.createElement("div", { className: " flex w-full flex-col gap-4" },
        React.createElement(Table, { sortDescriptor: sortDescriptor, onSortChange: (sortDescriptor) => handleSortChange(sortDescriptor), "aria-label": "Table for model rows", selectionMode: "single", onRowAction: (key) => linkFunction(key) },
            React.createElement(TableHeader, { columns: columns }, (column) => (React.createElement(TableColumn, { key: column.key, hideHeader: column.key === 'actions', align: column.align === 'center' ? 'center' : 'start', allowsSorting: column.allowsSorting }, column.label))),
            React.createElement(TableBody, { items: items || [], emptyContent: items ? emptyContent : ' ', isLoading: isLoading, loadingContent: React.createElement(Spinner, { label: "Loading..." }) }, (item) => (React.createElement(TableRow, null, (columnKey) => (
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            React.createElement(TableCell, null, renderRow({ item: item, columnKey: columnKey }))))))),
        React.createElement("div", { className: "mb-3 mt-3 flex items-center justify-center gap-2" },
            React.createElement(Button, { size: "sm", variant: "flat", color: "secondary", isDisabled: pageDescriptor?.page === 1, onPress: () => {
                    if (pageDescriptor && setPageDescriptor) {
                        const page = pageDescriptor.page > 1 ? pageDescriptor.page - 1 : pageDescriptor.page;
                        setPageDescriptor({ ...pageDescriptor, page });
                    }
                } }, "Previous"),
            React.createElement("div", { className: "flex items-center text-gray-400" }, pageDescriptor?.page),
            React.createElement(Button, { size: "sm", variant: "flat", color: "secondary", isDisabled: hasMore === false, onPress: () => {
                    if (pageDescriptor && setPageDescriptor) {
                        const page = pageDescriptor.page + 1;
                        setPageDescriptor({ ...pageDescriptor, page });
                    }
                } }, "Next"))));
};
