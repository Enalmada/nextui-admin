import type { SortDescriptor } from "@nextui-org/react";
import type { FC } from "react";
import React from "react";
import { useState } from "react";

import {
	type PageDescriptor,
	TableWrapper,
	type TableWrapperProps,
} from "./TableWrapper";

export interface UseTableWrapperParams {
	defaultSortDescriptor?: SortDescriptor;
	defaultPageDescriptor?: PageDescriptor;
}

export function useTableWrapper<T>({
	defaultSortDescriptor,
	defaultPageDescriptor,
}: UseTableWrapperParams = {}) {
	const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
		column: "id",
		direction: "descending",
		...defaultSortDescriptor,
	});

	const [pageDescriptor, setPageDescriptor] = useState<PageDescriptor>({
		page: 1,
		pageSize: 15,
		...defaultPageDescriptor,
	});

	const TableWrapperComponent: FC<TableWrapperProps<T>> = (props) => {
		return (
			<TableWrapper<T>
				{...props}
				paginationProps={{
					pageDescriptor: pageDescriptor,
					setPageDescriptor: setPageDescriptor,
					hasMore: props.paginationProps.hasMore,
				}}
				tableProps={{
					...props.tableProps,
					sortDescriptor: sortDescriptor,
					setSortDescriptor: setSortDescriptor,
				}}
			/>
		);
	};

	return {
		TableWrapperComponent,
		sortDescriptor,
		setSortDescriptor,
		pageDescriptor,
		setPageDescriptor,
	};
}
