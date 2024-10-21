// src/table/useTableWrapper.tsx
import React from "react";
import { useState } from "react";
import {
  TableWrapper
} from "./TableWrapper";
function useTableWrapper({
  defaultSortDescriptor,
  defaultPageDescriptor
} = {}) {
  const [sortDescriptor, setSortDescriptor] = useState({
    column: "id",
    direction: "descending",
    ...defaultSortDescriptor
  });
  const [pageDescriptor, setPageDescriptor] = useState({
    page: 1,
    pageSize: 15,
    ...defaultPageDescriptor
  });
  const TableWrapperComponent = (props) => {
    return /* @__PURE__ */ React.createElement(TableWrapper, {
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
  useTableWrapper
};
