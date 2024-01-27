// src/table/TableWrapper.tsx
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
import {capitalCase} from "change-case";
var getNestedProperty = function(obj, key) {
  return key.split(".").reduce((o, x) => {
    return typeof o === "undefined" || o === null ? o : o[x];
  }, obj);
};
import {
jsxDEV
} from "react/jsx-dev-runtime";
import {
createElement
} from "react";
var TableWrapper = (props) => {
  const { tableProps, columnProps, bodyProps, paginationProps } = props;
  const handleSortChange = (sortDescriptor) => {
    if (tableProps.setSortDescriptor) {
      tableProps.setSortDescriptor(sortDescriptor);
    }
  };
  const columnPropsMap = new Map(columnProps.map((c) => [c.key, c]));
  return jsxDEV("div", {
    className: " flex w-full flex-col gap-4",
    children: [
      jsxDEV(Table, {
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
        onRowAction: (key) => tableProps.linkFunction(key),
        children: [
          jsxDEV(TableHeader, {
            columns: columnProps,
            children: (column) => {
              const header = column.header === undefined ? capitalCase(column.key) : column.header;
              return createElement(TableColumn, {
                ...columnProps,
                key: column.key,
                align: column.align || "start"
              }, header);
            }
          }, undefined, false, undefined, this),
          jsxDEV(TableBody, {
            ...bodyProps,
            items: bodyProps.items || [],
            emptyContent: bodyProps.items ? bodyProps.emptyContent : " ",
            isLoading: bodyProps.isLoading,
            loadingContent: bodyProps.loadingContent || jsxDEV(Spinner, {
              label: "Loading..."
            }, undefined, false, undefined, this),
            children: (item) => jsxDEV(TableRow, {
              children: (columnKey) => {
                const columnProp = columnPropsMap.get(columnKey);
                if (columnProp && columnProp.renderCell) {
                  return jsxDEV(TableCell, {
                    children: columnProp.renderCell(item)
                  }, undefined, false, undefined, this);
                }
                return jsxDEV(TableCell, {
                  children: getNestedProperty(item, columnKey)
                }, undefined, false, undefined, this);
              }
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      jsxDEV("div", {
        className: "mb-3 mt-3 flex items-center justify-center gap-2",
        children: [
          jsxDEV(Button, {
            size: "sm",
            variant: "flat",
            color: "secondary",
            isDisabled: paginationProps.pageDescriptor?.page === 1,
            onPress: () => {
              if (paginationProps.pageDescriptor && paginationProps.setPageDescriptor) {
                const page = paginationProps.pageDescriptor.page > 1 ? paginationProps.pageDescriptor.page - 1 : paginationProps.pageDescriptor.page;
                paginationProps.setPageDescriptor({ ...paginationProps.pageDescriptor, page });
              }
            },
            children: "Previous"
          }, undefined, false, undefined, this),
          jsxDEV("div", {
            className: "flex items-center text-gray-400",
            children: paginationProps.pageDescriptor?.page
          }, undefined, false, undefined, this),
          jsxDEV(Button, {
            size: "sm",
            variant: "flat",
            color: "secondary",
            isDisabled: paginationProps.hasMore === false,
            onPress: () => {
              if (paginationProps.pageDescriptor && paginationProps.setPageDescriptor) {
                const page = paginationProps.pageDescriptor.page + 1;
                paginationProps.setPageDescriptor({ ...paginationProps.pageDescriptor, page });
              }
            },
            children: "Next"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
export {
  TableWrapper
};
