'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, NavbarItem, } from '@nextui-org/react';
import { DarkModeSwitch } from './darkmodeswitch';
export const UserDropdown = ({ userDropdownConfig }) => {
    const router = useRouter();
    const { user, trigger, items } = userDropdownConfig;
    const dropdownItems = items.map((item) => {
        if (item.isSpecial) {
            return (React.createElement(DropdownItem, { key: item.key, className: "h-14 gap-2", textValue: `Signed in as: ${user.email}` },
                React.createElement("p", { className: "font-semibold" }, "Signed in as"),
                React.createElement("p", { className: "font-semibold" }, user.email)));
        }
        return (React.createElement(DropdownItem, { key: item.key, color: item.color }, item.label));
    });
    // Add the DarkModeSwitch as another DropdownItem
    dropdownItems.push(React.createElement(DropdownItem, { key: "switch" },
        React.createElement(DarkModeSwitch, null)));
    return (React.createElement(Dropdown, null,
        React.createElement(NavbarItem, null,
            React.createElement(DropdownTrigger, null, trigger)),
        React.createElement(DropdownMenu, { "aria-label": "User menu actions", onAction: (key) => {
                router.push(items.find((item) => item.key === key)?.href || '/');
            } }, dropdownItems)));
};
