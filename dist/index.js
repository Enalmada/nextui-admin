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
  const {
    columns,
    items,
    renderRow,
    emptyContent,
    sortDescriptor,
    setSortDescriptor,
    pageDescriptor,
    setPageDescriptor,
    hasMore,
    isLoading,
    linkFunction
  } = props;
  const handleSortChange = (sortDescriptor2) => {
    if (setSortDescriptor) {
      setSortDescriptor(sortDescriptor2);
    }
  };
  return React.createElement("div", {
    className: " flex w-full flex-col gap-4"
  }, React.createElement(Table, {
    sortDescriptor,
    onSortChange: (sortDescriptor2) => handleSortChange(sortDescriptor2),
    "aria-label": "Table for model rows",
    selectionMode: "single",
    onRowAction: (key) => linkFunction(key)
  }, React.createElement(TableHeader, {
    columns
  }, (column) => React.createElement(TableColumn, {
    key: column.key,
    hideHeader: column.key === "actions",
    align: column.align === "center" ? "center" : "start",
    allowsSorting: column.allowsSorting
  }, column.label)), React.createElement(TableBody, {
    items: items || [],
    emptyContent: items ? emptyContent : " ",
    isLoading,
    loadingContent: React.createElement(Spinner, {
      label: "Loading..."
    })
  }, (item) => React.createElement(TableRow, null, (columnKey) => React.createElement(TableCell, null, renderRow({ item, columnKey }))))), React.createElement("div", {
    className: "mb-3 mt-3 flex items-center justify-center gap-2"
  }, React.createElement(Button, {
    size: "sm",
    variant: "flat",
    color: "secondary",
    isDisabled: pageDescriptor?.page === 1,
    onPress: () => {
      if (pageDescriptor && setPageDescriptor) {
        const page = pageDescriptor.page > 1 ? pageDescriptor.page - 1 : pageDescriptor.page;
        setPageDescriptor({ ...pageDescriptor, page });
      }
    }
  }, "Previous"), React.createElement("div", {
    className: "flex items-center text-gray-400"
  }, pageDescriptor?.page), React.createElement(Button, {
    size: "sm",
    variant: "flat",
    color: "secondary",
    isDisabled: hasMore === false,
    onPress: () => {
      if (pageDescriptor && setPageDescriptor) {
        const page = pageDescriptor.page + 1;
        setPageDescriptor({ ...pageDescriptor, page });
      }
    }
  }, "Next")));
};

// sidebarbar/navbar.styles.tsut
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
      sortDescriptor,
      setSortDescriptor,
      pageDescriptor,
      setPageDescriptor
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
