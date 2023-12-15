// src/sidebar/sidebar-item.tsx
import NextLink from "next/link";
import clsx from "clsx";
import {useSidebarContext} from "../layout/layout-context";
import {
jsxDEV
} from "react/jsx-dev-runtime";
var SidebarItem = ({ icon, title, isActive, href = "" }) => {
  const { collapsed: _collapsed, setCollapsed } = useSidebarContext();
  const handleClick = () => {
    if (window.innerWidth < 768) {
      setCollapsed();
    }
  };
  return jsxDEV(NextLink, {
    href,
    className: "max-w-full text-default-900 active:bg-none",
    children: jsxDEV("div", {
      className: clsx(isActive ? "bg-primary-100 [&_svg_path]:fill-primary-500" : "hover:bg-default-100", "flex h-full min-h-[44px] w-full cursor-pointer items-center gap-2 rounded-xl px-3.5 transition-all duration-150 active:scale-[0.98]"),
      onClick: handleClick,
      children: [
        icon,
        jsxDEV("span", {
          className: "text-default-900",
          children: title
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
};
export {
  SidebarItem
};
