'use client';

// src/sidebar/sidebar.tsx
import {usePathname} from "next/navigation";
import {useSidebarContext} from "../layout/layout-context";
import {CompaniesDropdown} from "./companies-dropdown";
import {SidebarItem} from "./sidebar-item";
import {SidebarMenu} from "./sidebar-menu";
import {Sidebar} from "./sidebar.styles";
import {
jsxDEV,
Fragment
} from "react/jsx-dev-runtime";

var ConditionalWrapper = ({
  condition,
  wrapper,
  children
}) => {
  if (children === undefined) {
    return null;
  }
  return condition ? wrapper(children) : jsxDEV(Fragment, {
    children
  }, undefined, false, undefined, this);
};
var SidebarWrapper = ({ sidebarConfig, adminNavHeader }) => {
  const { collapsed, setCollapsed } = useSidebarContext();
  const pathname = usePathname();
  return jsxDEV("aside", {
    className: "sticky top-0 z-[202] h-screen",
    children: [
      collapsed ? jsxDEV("div", {
        className: Sidebar.Overlay(),
        onClick: setCollapsed
      }, undefined, false, undefined, this) : null,
      jsxDEV("div", {
        className: Sidebar({
          collapsed
        }),
        children: [
          jsxDEV("div", {
            className: Sidebar.Header(),
            children: jsxDEV(CompaniesDropdown, {
              adminNavHeader
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          jsxDEV("div", {
            className: "flex h-full flex-col justify-between",
            children: jsxDEV("div", {
              className: Sidebar.Body(),
              children: sidebarConfig.map((section, sectionIndex) => jsxDEV(ConditionalWrapper, {
                condition: !!section.title,
                wrapper: (children) => jsxDEV(SidebarMenu, {
                  title: section.title || "",
                  children
                }, undefined, false, undefined, this),
                children: section.items.map((item, itemIndex) => jsxDEV(SidebarItem, {
                  isActive: pathname === item.href,
                  title: item.title,
                  icon: item.icon,
                  href: item.href
                }, `item-${itemIndex}`, false, undefined, this))
              }, `section-${sectionIndex}`, false, undefined, this))
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
export {
  SidebarWrapper
};
