'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from '@nextui-org/react';

import { DarkModeSwitch } from './darkmodeswitch';

export interface UserConfig {
  displayName?: string;
  email?: string;
  photoURL?: string;
}

export interface DropdownItemConfig {
  key: string;
  label: string;
  href?: string;
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | undefined;
  isSpecial?: boolean;
}

export interface UserDropdownConfig {
  user: UserConfig;
  trigger: React.ReactElement | string;
  items: DropdownItemConfig[];
}

interface Props {
  userDropdownConfig: UserDropdownConfig;
}

export const UserDropdown = ({ userDropdownConfig }: Props) => {
  const router = useRouter();
  const { user, trigger, items } = userDropdownConfig;

  const dropdownItems = items.map((item) => {
    if (item.isSpecial) {
      return (
        <DropdownItem
          key={item.key}
          className="h-14 gap-2"
          textValue={`Signed in as: ${user.email}`}
        >
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{user.email}</p>
        </DropdownItem>
      );
    }
    return (
      <DropdownItem key={item.key} color={item.color || 'default'} textValue={item.label}>
        {item.label}
      </DropdownItem>
    );
  });

  // Add the DarkModeSwitch as another DropdownItem
  dropdownItems.push(
    <DropdownItem key="switch" textValue="Dark Mode Switch">
      <DarkModeSwitch />
    </DropdownItem>
  );

  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>{trigger}</DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="User menu actions"
        onAction={(key) => {
          router.push(items.find((item) => item.key === key)?.href || '/');
        }}
      >
        {dropdownItems}
      </DropdownMenu>
    </Dropdown>
  );
};
