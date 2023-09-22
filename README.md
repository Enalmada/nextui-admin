# helper for generating admin pages with nextui

Based on the amazing [nextui-dashboard-template](https://github.com/Siumauricio/nextui-dashboard-template).
This repo basically takes that template and:
* abstracts out code that can be considered implementation details, shared, etc
* adds sorting and pagination

It doesn't add modularization for every possible spot.  Feel free to improve it with a PR for anything you need.

## Installation

```bash
bun add @enalmada/nextui-admin
```

## Usage

### Layout
* populate the following objects:
  * SidebarSectionConfig[]
  * AdminNavHeader
  * UserDropdownConfig
* pass them into Layout component

Example layout
```tsx
// layout.tsx
import React from 'react';
import { type User } from '@/client/gql/generated/graphql';
import {
    Layout,
    type AdminNavHeader,
    type DropdownItemConfig,
    type SidebarSectionConfig,
    type UserConfig,
    type UserDropdownConfig,
} from 'nextui-admin';
import {
    BiBuildingHouse as AcmeIcon,
    BiCode as CodeIcon,
    BiSolidHome as HomeIcon,
    BiSolidCog as SettingsIcon,
    BiTask as TaskIcon,
    BiSolidUser as UserIcon,
    BiSolidBox as ViewIcon,
} from 'react-icons/bi';

const sidebarConfig: SidebarSectionConfig[] = [
    {
        title: null, // No title for the Home section
        items: [
            {
                title: 'Home',
                icon: <HomeIcon />,
                href: '/admin',
            },
        ],
    },
    {
        title: 'Entities',
        items: [
            {
                title: 'Users',
                icon: <UserIcon />,
                href: '/admin/users',
            },
            {
                title: 'Tasks',
                icon: <TaskIcon />,
                href: '/admin/tasks',
            },
        ],
    },
    {
        title: 'Development',
        items: [
            {
                title: 'Developers',
                icon: <CodeIcon />,
                href: '/admin/developers',
            },
            {
                title: 'View Test Data',
                icon: <ViewIcon />,
                href: '/admin/view',
            },
            {
                title: 'Settings',
                icon: <SettingsIcon />,
                href: '/admin/settings',
            },
        ],
    },
];

const adminNavHeader: AdminNavHeader = {
    name: 'ToDo Co.',
    name2: 'ToDo App',
    logo: <AcmeIcon />,
};

const items: DropdownItemConfig[] = [
    { key: 'signed', label: 'Signed In', isSpecial: true },
    { key: 'marketing', label: 'Marketing', href: '/' },
    { key: 'app', label: 'App', href: '/app' },
    { key: 'logout', label: 'Log Out', href: '/logout', color: 'danger' },
];

interface Props {
    me?: User | null;
    children: React.ReactNode;
}
export default function AdminLayout({ me, children }: Props) {
    const user: UserConfig = {
        displayName: me?.name || 'unavailable',
        email: me?.email || 'unavailable',
        photoURL: 'https://example.com/photo.jpg',
    };

    const userDropdownConfig: UserDropdownConfig = {
        user,
        items,
    };

    return (
        <Layout
            sidebarConfig={sidebarConfig}
            adminNavHeader={adminNavHeader}
            userDropdownConfig={userDropdownConfig}
        >
            <div className="mx-auto my-5 flex w-full max-w-[95rem] flex-col gap-4">{children}</div>
        </Layout>
    );
}
```

### Table

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

## TODO
[ ] add slots across sidebar and top nav for arbitrary components
[ ] remove next as a dependency (Image, Router used sidebar)


## Alternatives

[refine](https://refine.dev/) 
* didn't support nextui 

[Mantine-Admin](https://github.com/jotyy/Mantine-Admin)
* at the time, v7 wasn't out with tailwind support

[React-Admin](https://marmelab.com/react-admin/)
* looked really nice but I some features I desired were enterprise.  Wanted something next-ui specific
