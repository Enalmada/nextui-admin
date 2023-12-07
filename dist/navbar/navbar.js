import React from 'react';
import { Navbar, NavbarContent } from '@nextui-org/react';
import { BurguerButton } from './burguer-button';
import { UserDropdown } from './user-dropdown';
export const NavbarWrapper = ({ userDropdownConfig, children }) => {
    return (React.createElement("div", { className: "relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden" },
        React.createElement(Navbar, { isBordered: true, className: "w-full", classNames: {
                wrapper: 'w-full max-w-full',
            } },
            React.createElement(NavbarContent, { className: "md:hidden" },
                React.createElement(BurguerButton, null)),
            React.createElement(NavbarContent, { className: "w-full max-md:hidden" }),
            React.createElement(NavbarContent, { justify: "end", className: "w-fit data-[justify=end]:flex-grow-0" },
                React.createElement(NavbarContent, null,
                    React.createElement(UserDropdown, { userDropdownConfig: userDropdownConfig })))),
        children));
};
