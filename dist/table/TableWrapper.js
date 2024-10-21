// src/table/TableWrapper.tsx
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
import { capitalCase } from "change-case";
import React from "react";
function getNestedProperty(obj, key) {
  return key.split(".").reduce((o, x) => {
    return typeof o === "undefined" || o === null ? o : o[x];
  }, obj);
}
var TableWrapper = (props) => {
  const { tableProps, columnProps, bodyProps, paginationProps } = props;
  const handleSortChange = (sortDescriptor) => {
    if (tableProps.setSortDescriptor) {
      tableProps.setSortDescriptor(sortDescriptor);
    }
  };
  const columnPropsMap = new Map(columnProps.map((c) => [c.key, c]));
  return /* @__PURE__ */ React.createElement("div", {
    className: " flex w-full flex-col gap-4"
  }, /* @__PURE__ */ React.createElement(Table, {
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
  }, /* @__PURE__ */ React.createElement(TableHeader, {
    columns: columnProps
  }, (column) => {
    const header = column.header === undefined ? capitalCase(column.key) : column.header;
    return /* @__PURE__ */ React.createElement(TableColumn, {
      ...columnProps,
      key: column.key,
      align: column.align || "start"
    }, header);
  }), /* @__PURE__ */ React.createElement(TableBody, {
    ...bodyProps,
    items: bodyProps.items || [],
    emptyContent: bodyProps.items ? bodyProps.emptyContent : " ",
    isLoading: bodyProps.isLoading,
    loadingContent: bodyProps.loadingContent || /* @__PURE__ */ React.createElement(Spinner, {
      label: "Loading..."
    })
  }, (item) => /* @__PURE__ */ React.createElement(TableRow, null, (columnKey) => {
    const columnProp = columnPropsMap.get(columnKey);
    if (columnProp?.renderCell) {
      return /* @__PURE__ */ React.createElement(TableCell, null, columnProp.renderCell(item));
    }
    return /* @__PURE__ */ React.createElement(TableCell, null, getNestedProperty(item, columnKey));
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3 mt-3 flex items-center justify-center gap-2"
  }, /* @__PURE__ */ React.createElement(Button, {
    size: "sm",
    variant: "flat",
    color: "secondary",
    isDisabled: paginationProps.pageDescriptor?.page === 1,
    onPress: () => {
      if (paginationProps.pageDescriptor && paginationProps.setPageDescriptor) {
        const page = paginationProps.pageDescriptor.page > 1 ? paginationProps.pageDescriptor.page - 1 : paginationProps.pageDescriptor.page;
        paginationProps.setPageDescriptor({
          ...paginationProps.pageDescriptor,
          page
        });
      }
    }
  }, "Previous"), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center text-gray-400"
  }, paginationProps.pageDescriptor?.page), /* @__PURE__ */ React.createElement(Button, {
    size: "sm",
    variant: "flat",
    color: "secondary",
    isDisabled: paginationProps.hasMore === false,
    onPress: () => {
      if (paginationProps.pageDescriptor && paginationProps.setPageDescriptor) {
        const page = paginationProps.pageDescriptor.page + 1;
        paginationProps.setPageDescriptor({
          ...paginationProps.pageDescriptor,
          page
        });
      }
    }
  }, "Next")));
};
export {
  TableWrapper
};
