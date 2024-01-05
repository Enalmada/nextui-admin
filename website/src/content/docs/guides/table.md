---
title: Table
description: A guide how to use this module.
---

Create an object that will define columns, header, and cell rendering.
Notes:
- header will default to [capital case](https://www.npmjs.com/package/change-case) if undefined.  null will disable header

Example:
```tsx
// RenderRows.tsx
import React from 'react';
import { TaskStatus, type Task } from '@/client/gql/generated/graphql';
import { type TableColumnProps } from '@enalmada/nextui-admin';
import { Chip, Tooltip } from '@nextui-org/react';
import { BiEditAlt as EditIcon } from 'react-icons/bi';

export const columnProps: TableColumnProps<Task>[] = [
    { key: 'id', header: 'ID', allowsSorting: true },
    { key: 'title', header: 'Title', allowsSorting: true },
    { key: 'description', header: 'Description' },
    {
        key: 'status',
        header: 'Status',
        allowsSorting: true,
        renderCell: (task: Task) => (
            <Chip
                size="sm"
                variant="flat"
                color={task.status === TaskStatus.Completed ? 'success' : 'primary'}
            >
                <span className="text-xs capitalize">{task.status}</span>
            </Chip>
        ),
    },
  ]
};
```

Create a component with the table and populate it with configuration.  The configuration parameters extend nextui table parameters.
```tsx
// AdminTaskListTable.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, InputControlled } from '@/client/ui';
import { useTableWrapper } from '@enalmada/nextui-admin';

import { columnProps } from './RenderRows';

export const TaskTable = () => {
  const router = useRouter();

  const { TableWrapperComponent, sortDescriptor, pageDescriptor } = useTableWrapper<Task>();
    
  return (
      <div className="mx-auto w-full max-w-[95rem]">
          <TableWrapperComponent
              tableProps={{
                  linkFunction: (id: React.Key) => router.push(`/admin/users/${id}`),
              }}
              columnProps={columnProps}
              bodyProps={{
                  items: items || undefined,
                  emptyContent: 'No rows to display.',
                  isLoading: false,
              }}
              paginationProps={{
                  hasMore: dataQuery?.usersPage?.hasMore,
              }}
          />
      </div>
  );
};
```