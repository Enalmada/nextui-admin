'use client';

// src/layout/layout.tsx
import React from "react";
import { useLockedBody } from "../hooks/useBodyLock";
import { NavbarWrapper } from "../navbar/navbar";
import { SidebarWrapper } from "../sidebar/sidebar";
import { SidebarContext } from "./layout-context";

var Layout = ({
  sidebarConfig,
  adminNavHeader,
  userDropdownConfig,
  children
}) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [_, setLocked] = useLockedBody(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };
  return /* @__PURE__ */ React.createElement(SidebarContext.Provider, {
    value: {
      collapsed: sidebarOpen,
      setCollapsed: handleToggleSidebar
    }
  }, /* @__PURE__ */ React.createElement("section", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement(SidebarWrapper, {
    sidebarConfig,
    adminNavHeader
  }), /* @__PURE__ */ React.createElement(NavbarWrapper, {
    userDropdownConfig
  }, children)));
};
export {
  Layout
};
