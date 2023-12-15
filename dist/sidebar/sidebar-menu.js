// src/sidebar/sidebar-menu.tsx
import {
jsxDEV
} from "react/jsx-dev-runtime";
var SidebarMenu = ({ title, children }) => {
  return jsxDEV("div", {
    className: "flex flex-col gap-2",
    children: [
      jsxDEV("span", {
        className: "text-xs font-normal ",
        children: title
      }, undefined, false, undefined, this),
      children
    ]
  }, undefined, true, undefined, this);
};
export {
  SidebarMenu
};
