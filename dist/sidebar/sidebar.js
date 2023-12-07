'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { useSidebarContext } from '../layout/layout-context';
import { CompaniesDropdown } from './companies-dropdown';
import { SidebarItem } from './sidebar-item';
import { SidebarMenu } from './sidebar-menu';
import { Sidebar } from './sidebar.styles';
const ConditionalWrapper = ({ condition, wrapper, children }) => {
    if (children === undefined) {
        return null;
    }
    return condition ? wrapper(children) : React.createElement(React.Fragment, null, children);
};
export const SidebarWrapper = ({ sidebarConfig, adminNavHeader }) => {
    const { collapsed, setCollapsed } = useSidebarContext();
    const pathname = usePathname();
    return (React.createElement("aside", { className: "sticky top-0 z-[202] h-screen" },
        collapsed ? React.createElement("div", { className: Sidebar.Overlay(), onClick: setCollapsed }) : null,
        React.createElement("div", { className: Sidebar({
                collapsed: collapsed,
            }) },
            React.createElement("div", { className: Sidebar.Header() },
                React.createElement(CompaniesDropdown, { adminNavHeader: adminNavHeader })),
            React.createElement("div", { className: "flex h-full flex-col justify-between" },
                React.createElement("div", { className: Sidebar.Body() }, sidebarConfig.map((section, sectionIndex) => (React.createElement(ConditionalWrapper, { key: `section-${sectionIndex}`, condition: !!section.title, wrapper: (children) => (React.createElement(SidebarMenu, { title: section.title || '' }, children)) }, section.items.map((item, itemIndex) => (React.createElement(SidebarItem, { key: `item-${itemIndex}`, isActive: pathname === item.href, title: item.title, icon: item.icon, href: item.href })))))))))));
};
