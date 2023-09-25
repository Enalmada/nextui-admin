import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navbar, NavbarContent } from '@nextui-org/react';
import { BurguerButton } from './burguer-button';
import { UserDropdown } from './user-dropdown';
export const NavbarWrapper = ({ userDropdownConfig, children }) => {
    return (_jsxs("div", { className: "relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden", children: [_jsxs(Navbar, { isBordered: true, className: "w-full", classNames: {
                    wrapper: 'w-full max-w-full',
                }, children: [_jsx(NavbarContent, { className: "md:hidden", children: _jsx(BurguerButton, {}) }), _jsx(NavbarContent, { className: "w-full max-md:hidden" }), _jsx(NavbarContent, { justify: "end", className: "w-fit data-[justify=end]:flex-grow-0", children: _jsx(NavbarContent, { children: _jsx(UserDropdown, { userDropdownConfig: userDropdownConfig }) }) })] }), children] }));
};
