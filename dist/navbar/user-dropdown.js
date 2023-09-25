'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRouter } from 'next/navigation';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, NavbarItem, } from '@nextui-org/react';
import { DarkModeSwitch } from './darkmodeswitch';
export const UserDropdown = ({ userDropdownConfig }) => {
    const router = useRouter();
    const { user, trigger, items } = userDropdownConfig;
    const dropdownItems = items.map((item) => {
        if (item.isSpecial) {
            return (_jsxs(DropdownItem, { className: "h-14 gap-2", textValue: `Signed in as: ${user.email}`, children: [_jsx("p", { className: "font-semibold", children: "Signed in as" }), _jsx("p", { className: "font-semibold", children: user.email })] }, item.key));
        }
        return (_jsx(DropdownItem, { color: item.color, children: item.label }, item.key));
    });
    // Add the DarkModeSwitch as another DropdownItem
    dropdownItems.push(_jsx(DropdownItem, { children: _jsx(DarkModeSwitch, {}) }, "switch"));
    return (_jsxs(Dropdown, { children: [_jsx(NavbarItem, { children: _jsx(DropdownTrigger, { children: trigger }) }), _jsx(DropdownMenu, { "aria-label": "User menu actions", onAction: (key) => {
                    router.push(items.find((item) => item.key === key)?.href || '/');
                }, children: dropdownItems })] }));
};
