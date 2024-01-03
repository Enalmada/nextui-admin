// src/table/useTableWrapper.tsx
import {useState} from "react";
import {TableWrapper as TableWrapper2} from "./TableWrapper";
function useTableWrapper({ defaultSortDescriptor, defaultPageDescriptor } = {}) {
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
    return jsxDEV(TableWrapper2, {
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
    }, undefined, false, undefined, this);
  };
  return {
    TableWrapperComponent,
    sortDescriptor,
    setSortDescriptor,
    pageDescriptor,
    setPageDescriptor
  };
}
import {
jsxDEV
} from "react/jsx-dev-runtime";
export {
  useTableWrapper
};
