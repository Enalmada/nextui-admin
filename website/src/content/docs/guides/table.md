---
title: Table
description: A guide how to use this module.
---


Create a RenderTable that will define columns and function to render each row.

Example:
```tsx
// RenderTable.tsx
import React, { type ReactNode } from 'react';
import { TaskStatus, type Task } from '@/client/gql/generated/graphql';
import { Chip, Tooltip } from '@nextui-org/react';
import { type Column, type RenderRowProps } from '@enalmada/nextui-admin';
import { BiEditAlt as EditIcon } from 'react-icons/bi';

interface TaskRenderRowProps extends RenderRowProps {
  item: Task;
}

export const columns: Column[] = [
  { key: 'id', label: 'ID', allowsSorting: true },
  { key: 'title', label: 'Title', allowsSorting: true },
  { key: 'description', label: 'Description' },
  { key: 'status', label: 'Status', allowsSorting: true },
  { key: 'dueDate', label: 'Due Date', allowsSorting: true },
];

export const renderTable = ({ item: task, columnKey }: TaskRenderRowProps): ReactNode => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const cellValue = task[columnKey];

  switch (columnKey) {
    case 'status':
      return (
        <Chip
          size="sm"
          variant="flat"
          color={task.status === TaskStatus.Completed ? 'success' : 'primary'}
        >
          <span className="text-xs capitalize">{task.status}</span>
        </Chip>
      );

    case 'auditing':
      return (
        <>
          <div>Created {new Date(task.createdAt).toLocaleString()}</div>
          <div>Updated {new Date(task.updatedAt).toLocaleString()}</div>
          <div>Version {task.version}</div>
        </>
      );

    case 'actions':
      return (
        <div className="flex items-end gap-4 ">
          <div>
            <Tooltip content="Edit" color="secondary">
              <button onClick={() => console.log('Edit', task.id)}>
                <EditIcon size={20} fill="#979797" />
              </button>
            </Tooltip>
          </div>
        </div>
      );
    default:
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return cellValue;
  }
};
```

Create a component with the table and populate it with configuration.
```tsx
// AdminTaskListTable.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, InputControlled } from '@/client/ui';
import { useTableWrapper } from '@enalmada/nextui-admin';

import { columns, renderTable } from './RenderTable';

export const TaskList = () => {
  const router = useRouter();

  const { TableWrapperComponent, sortDescriptor, pageDescriptor } = useTableWrapper<Task>();
    
  return (
      <div className="mx-auto w-full max-w-[95rem]">
        <TableWrapperComponent
          columns={columns}
          items={items || undefined}
          renderRow={renderTable}
          emptyContent={'No rows to display.'}
          hasMore={true}
          isLoading={false}
          linkFunction={(id: React.Key) => router.push(`/admin/tasks/${id}`)}
        />
      </div>
  );
};
```