// src/navbar/navbar.tsx
import { Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";
import { BurguerButton } from "./burguer-button";
import { UserDropdown } from "./user-dropdown";
var NavbarWrapper = ({ userDropdownConfig, children }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"
  }, /* @__PURE__ */ React.createElement(Navbar, {
    isBordered: true,
    className: "w-full",
    classNames: {
      wrapper: "w-full max-w-full"
    }
  }, /* @__PURE__ */ React.createElement(NavbarContent, {
    className: "md:hidden"
  }, /* @__PURE__ */ React.createElement(BurguerButton, null)), /* @__PURE__ */ React.createElement(NavbarContent, {
    className: "w-full max-md:hidden"
  }), /* @__PURE__ */ React.createElement(NavbarContent, {
    justify: "end",
    className: "w-fit data-[justify=end]:flex-grow-0"
  }, /* @__PURE__ */ React.createElement(NavbarContent, null, /* @__PURE__ */ React.createElement(UserDropdown, {
    userDropdownConfig
  })))), children);
};
export {
  NavbarWrapper
};
