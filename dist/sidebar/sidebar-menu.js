// src/sidebar/sidebar-menu.tsx
import React from "react";
var SidebarMenu = ({ title, children }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-2"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-xs font-normal "
  }, title), children);
};
export {
  SidebarMenu
};
