'use client';

// src/sidebar/sidebar.tsx
import { usePathname } from "next/navigation";
import React from "react";
import { useSidebarContext } from "../layout/layout-context";
import { CompaniesDropdown } from "./companies-dropdown";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { Sidebar } from "./sidebar.styles";

var ConditionalWrapper = ({
  condition,
  wrapper,
  children
}) => {
  if (children === undefined) {
    return null;
  }
  return condition ? wrapper(children) : /* @__PURE__ */ React.createElement(React.Fragment, null, children);
};
var SidebarWrapper = ({ sidebarConfig, adminNavHeader }) => {
  const { collapsed, setCollapsed } = useSidebarContext();
  const pathname = usePathname();
  return /* @__PURE__ */ React.createElement("aside", {
    className: "sticky top-0 z-[202] h-screen"
  }, collapsed ? /* @__PURE__ */ React.createElement("div", {
    className: Sidebar.Overlay(),
    onClick: setCollapsed
  }) : null, /* @__PURE__ */ React.createElement("div", {
    className: Sidebar({
      collapsed
    })
  }, /* @__PURE__ */ React.createElement("div", {
    className: Sidebar.Header()
  }, /* @__PURE__ */ React.createElement(CompaniesDropdown, {
    adminNavHeader
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex h-full flex-col justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: Sidebar.Body()
  }, sidebarConfig.map((section, sectionIndex) => /* @__PURE__ */ React.createElement(ConditionalWrapper, {
    key: `section-${sectionIndex}`,
    condition: !!section.title,
    wrapper: (children) => /* @__PURE__ */ React.createElement(SidebarMenu, {
      title: section.title || ""
    }, children)
  }, section.items.map((item, itemIndex) => /* @__PURE__ */ React.createElement(SidebarItem, {
    key: `item-${itemIndex}`,
    isActive: pathname === item.href,
    title: item.title,
    icon: item.icon,
    href: item.href
  }))))))));
};
export {
  SidebarWrapper
};
