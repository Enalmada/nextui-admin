'use client';
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
    return (React.createElement(SidebarContext.Provider, { value: {
            collapsed: sidebarOpen,
            setCollapsed: handleToggleSidebar,
        } },
        React.createElement("section", { className: "flex" },
            React.createElement(SidebarWrapper, { sidebarConfig: sidebarConfig, adminNavHeader: adminNavHeader }),
            React.createElement(NavbarWrapper, { userDropdownConfig: userDropdownConfig }, children))));
};
