// sidebarbar/n
import {Layout} from "./layout/layout";

// sidebarbar/navbar.styles.t
import React from "react";
import {
Button,
Spinner,
Table,
TableBody,
TableCell,
TableColumn,
TableHeader,
TableRow
} from "@nextui-org/react";
var TableWrapper = (props) => {
  const { tableProps, columnProps, bodyProps, paginationProps } = props;
  const handleSortChange = (sortDescriptor) => {
    if (tableProps.setSortDescriptor) {
      tableProps.setSortDescriptor(sortDescriptor);
    }
  };
  const columnPropsMap = new Map(columnProps.map((c) => [c.key, c]));
  return React.createElement("div", {
    className: " flex w-full flex-col gap-4"
  }, React.createElement(Table, {
    ...tableProps,
    onSortChange: (sortDescriptor) => {
      if (tableProps.onSortChange) {
        tableProps.onSortChange(sortDescriptor);
      } else {
        handleSortChange(sortDescriptor);
      }
    },
    "aria-label": tableProps["aria-label"] || "Table for model rows",
    selectionMode: tableProps.selectionMode || "single",
    onRowAction: (key) => tableProps.linkFunction(key)
  }, React.createElement(TableHeader, {
    columns: columnProps
  }, (column) => React.createElement(TableColumn, {
    ...columnProps,
    key: column.key,
    hideHeader: column.key === "actions",
    align: column.align || "start"
  }, column.header || column.key)), React.createElement(TableBody, {
    ...bodyProps,
    items: bodyProps.items || [],
    emptyContent: bodyProps.items ? bodyProps.emptyContent : " ",
    isLoading: bodyProps.isLoading,
    loadingContent: bodyProps.loadingContent || React.createElement(Spinner, {
      label: "Loading..."
    })
  }, (item) => React.createElement(TableRow, null, (columnKey) => {
    const columnProp = columnPropsMap.get(columnKey);
    if (columnProp && columnProp.renderCell) {
      return React.createElement(TableCell, null, columnProp.renderCell(item));
    }
    return React.createElement(TableCell, null, item[columnKey]);
  }))), React.createElement("div", {
    className: "mb-3 mt-3 flex items-center justify-center gap-2"
  }, React.createElement(Button, {
    size: "sm",
    variant: "flat",
    color: "secondary",
    isDisabled: paginationProps.pageDescriptor?.page === 1,
    onPress: () => {
      if (paginationProps.pageDescriptor && paginationProps.setPageDescriptor) {
        const page = paginationProps.pageDescriptor.page > 1 ? paginationProps.pageDescriptor.page - 1 : paginationProps.pageDescriptor.page;
        paginationProps.setPageDescriptor({ ...paginationProps.pageDescriptor, page });
      }
    }
  }, "Previous"), React.createElement("div", {
    className: "flex items-center text-gray-400"
  }, paginationProps.pageDescriptor?.page), React.createElement(Button, {
    size: "sm",
    variant: "flat",
    color: "secondary",
    isDisabled: paginationProps.hasMore === false,
    onPress: () => {
      if (paginationProps.pageDescriptor && paginationProps.setPageDescriptor) {
        const page = paginationProps.pageDescriptor.page + 1;
        paginationProps.setPageDescriptor({ ...paginationProps.pageDescriptor, page });
      }
    }
  }, "Next")));
};

// sidebarbar/navbar.styles.tssx
import React2, {useState} from "react";
function useTableWrapper() {
  const [sortDescriptor, setSortDescriptor] = useState({
    column: "id",
    direction: "descending"
  });
  const [pageDescriptor, setPageDescriptor] = useState({
    page: 1,
    pageSize: 50
  });
  const TableWrapperComponent = (props) => {
    return React2.createElement(TableWrapper, {
      ...props,
      paginationProps: {
        pageDescriptor,
        setPageDescriptor,
        hasMore: props.paginationProps.hasMore
      },
      tableProps: {
        ...props.tableProps,
        sortDescriptor,
        setSortDescriptor
      }
    });
  };
  return {
    TableWrapperComponent,
    sortDescriptor,
    setSortDescriptor,
    pageDescriptor,
    setPageDescriptor
  };
}
export {
  useTableWrapper,
  TableWrapper,
  Layout
};
