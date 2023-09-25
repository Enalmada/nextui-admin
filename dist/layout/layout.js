'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { useLockedBody } from '../hooks/useBodyLock';
import { NavbarWrapper } from '../navbar/navbar';
import { SidebarWrapper } from '../sidebar/sidebar';
import { SidebarContext } from './layout-context';
export const Layout = ({ sidebarConfig, adminNavHeader, userDropdownConfig, children }) => {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setLocked] = useLockedBody(false);
    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        setLocked(!sidebarOpen);
    };
    return (_jsx(SidebarContext.Provider, { value: {
            collapsed: sidebarOpen,
            setCollapsed: handleToggleSidebar,
        }, children: _jsxs("section", { className: "flex", children: [_jsx(SidebarWrapper, { sidebarConfig: sidebarConfig, adminNavHeader: adminNavHeader }), _jsx(NavbarWrapper, { userDropdownConfig: userDropdownConfig, children: children })] }) }));
};
