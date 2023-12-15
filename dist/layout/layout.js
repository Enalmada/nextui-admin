'use client';

// src/layout/layout.tsx
import React from "react";
import {useLockedBody} from "../hooks/useBodyLock";
import {NavbarWrapper} from "../navbar/navbar";
import {SidebarWrapper} from "../sidebar/sidebar";
import {SidebarContext} from "./layout-context";
import {
jsxDEV
} from "react/jsx-dev-runtime";

var Layout = ({ sidebarConfig, adminNavHeader, userDropdownConfig, children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [_, setLocked] = useLockedBody(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };
  return jsxDEV(SidebarContext.Provider, {
    value: {
      collapsed: sidebarOpen,
      setCollapsed: handleToggleSidebar
    },
    children: jsxDEV("section", {
      className: "flex",
      children: [
        jsxDEV(SidebarWrapper, {
          sidebarConfig,
          adminNavHeader
        }, undefined, false, undefined, this),
        jsxDEV(NavbarWrapper, {
          userDropdownConfig,
          children
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
};
export {
  Layout
};
