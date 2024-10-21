'use client';

// src/navbar/user-dropdown.tsx
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import { DarkModeSwitch } from "./darkmodeswitch";

var UserDropdown = ({ userDropdownConfig }) => {
  const router = useRouter();
  const { user, trigger, items } = userDropdownConfig;
  const dropdownItems = items.map((item) => {
    if (item.isSpecial) {
      return /* @__PURE__ */ React.createElement(DropdownItem, {
        key: item.key,
        className: "h-14 gap-2",
        textValue: `Signed in as: ${user.email}`
      }, /* @__PURE__ */ React.createElement("p", {
        className: "font-semibold"
      }, "Signed in as"), /* @__PURE__ */ React.createElement("p", {
        className: "font-semibold"
      }, user.email));
    }
    return /* @__PURE__ */ React.createElement(DropdownItem, {
      key: item.key,
      color: item.color || "default",
      textValue: item.label
    }, item.label);
  });
  dropdownItems.push(/* @__PURE__ */ React.createElement(DropdownItem, {
    key: "switch",
    textValue: "Dark Mode Switch"
  }, /* @__PURE__ */ React.createElement(DarkModeSwitch, null)));
  return /* @__PURE__ */ React.createElement(Dropdown, null, /* @__PURE__ */ React.createElement(NavbarItem, null, /* @__PURE__ */ React.createElement(DropdownTrigger, null, trigger)), /* @__PURE__ */ React.createElement(DropdownMenu, {
    "aria-label": "User menu actions",
    onAction: (key) => {
      router.push(items.find((item) => item.key === key)?.href || "/");
    }
  }, dropdownItems));
};
export {
  UserDropdown
};
