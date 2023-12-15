// src/navbar/navbar.tsx
import {Navbar, NavbarContent} from "@nextui-org/react";
import {BurguerButton} from "./burguer-button";
import {UserDropdown} from "./user-dropdown";
import {
jsxDEV
} from "react/jsx-dev-runtime";
var NavbarWrapper = ({ userDropdownConfig, children }) => {
  return jsxDEV("div", {
    className: "relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden",
    children: [
      jsxDEV(Navbar, {
        isBordered: true,
        className: "w-full",
        classNames: {
          wrapper: "w-full max-w-full"
        },
        children: [
          jsxDEV(NavbarContent, {
            className: "md:hidden",
            children: jsxDEV(BurguerButton, {}, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          jsxDEV(NavbarContent, {
            className: "w-full max-md:hidden"
          }, undefined, false, undefined, this),
          jsxDEV(NavbarContent, {
            justify: "end",
            className: "w-fit data-[justify=end]:flex-grow-0",
            children: jsxDEV(NavbarContent, {
              children: jsxDEV(UserDropdown, {
                userDropdownConfig
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      children
    ]
  }, undefined, true, undefined, this);
};
export {
  NavbarWrapper
};
