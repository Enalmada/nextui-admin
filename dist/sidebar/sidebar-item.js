// src/sidebar/sidebar-item.tsx
import clsx from "clsx";
import NextLink from "next/link";
import React from "react";
import { useSidebarContext } from "../layout/layout-context";
var SidebarItem = ({ icon, title, isActive, href = "" }) => {
  const { collapsed: _collapsed, setCollapsed } = useSidebarContext();
  const handleClick = () => {
    if (window.innerWidth < 768) {
      setCollapsed();
    }
  };
  return /* @__PURE__ */ React.createElement(NextLink, {
    href,
    className: "max-w-full text-default-900 active:bg-none"
  }, /* @__PURE__ */ React.createElement("div", {
    className: clsx(isActive ? "bg-primary-100 [&_svg_path]:fill-primary-500" : "hover:bg-default-100", "flex h-full min-h-[44px] w-full cursor-pointer items-center gap-2 rounded-xl px-3.5 transition-all duration-150 active:scale-[0.98]"),
    onClick: handleClick
  }, icon, /* @__PURE__ */ React.createElement("span", {
    className: "text-default-900"
  }, title)));
};
export {
  SidebarItem
};
