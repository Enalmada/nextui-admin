'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { usePathname } from 'next/navigation';
import { useSidebarContext } from '../layout/layout-context';
import { CompaniesDropdown } from './companies-dropdown';
import { SidebarItem } from './sidebar-item';
import { SidebarMenu } from './sidebar-menu';
import { Sidebar } from './sidebar.styles';
const ConditionalWrapper = ({ condition, wrapper, children }) => condition ? wrapper(children) : children;
export const SidebarWrapper = ({ sidebarConfig, adminNavHeader }) => {
    const { collapsed, setCollapsed } = useSidebarContext();
    const pathname = usePathname();
    return (_jsxs("aside", { className: "sticky top-0 z-[202] h-screen", children: [collapsed ? _jsx("div", { className: Sidebar.Overlay(), onClick: setCollapsed }) : null, _jsxs("div", { className: Sidebar({
                    collapsed: collapsed,
                }), children: [_jsx("div", { className: Sidebar.Header(), children: _jsx(CompaniesDropdown, { adminNavHeader: adminNavHeader }) }), _jsx("div", { className: "flex h-full flex-col justify-between", children: _jsx("div", { className: Sidebar.Body(), children: sidebarConfig.map((section, sectionIndex) => (_jsx(ConditionalWrapper, { condition: !!section.title, wrapper: (children) => (_jsx(SidebarMenu, { title: section.title || '', children: children })), children: section.items.map((item, itemIndex) => (_jsx(SidebarItem, { isActive: pathname === item.href, title: item.title, icon: item.icon, href: item.href }, `item-${itemIndex}`))) }, `section-${sectionIndex}`))) }) })] })] }));
};
