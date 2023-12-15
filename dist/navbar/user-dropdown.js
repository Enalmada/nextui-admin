'use client';

// src/navbar/user-dropdown.tsx
import {useRouter} from "next/navigation";
import {
Dropdown,
DropdownItem,
DropdownMenu,
DropdownTrigger,
NavbarItem
} from "@nextui-org/react";
import {DarkModeSwitch} from "./darkmodeswitch";
import {
jsxDEV
} from "react/jsx-dev-runtime";

var UserDropdown = ({ userDropdownConfig }) => {
  const router = useRouter();
  const { user, trigger, items } = userDropdownConfig;
  const dropdownItems = items.map((item) => {
    if (item.isSpecial) {
      return jsxDEV(DropdownItem, {
        className: "h-14 gap-2",
        textValue: `Signed in as: ${user.email}`,
        children: [
          jsxDEV("p", {
            className: "font-semibold",
            children: "Signed in as"
          }, undefined, false, undefined, this),
          jsxDEV("p", {
            className: "font-semibold",
            children: user.email
          }, undefined, false, undefined, this)
        ]
      }, item.key, true, undefined, this);
    }
    return jsxDEV(DropdownItem, {
      color: item.color,
      children: item.label
    }, item.key, false, undefined, this);
  });
  dropdownItems.push(jsxDEV(DropdownItem, {
    children: jsxDEV(DarkModeSwitch, {}, undefined, false, undefined, this)
  }, "switch", false, undefined, this));
  return jsxDEV(Dropdown, {
    children: [
      jsxDEV(NavbarItem, {
        children: jsxDEV(DropdownTrigger, {
          children: trigger
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      jsxDEV(DropdownMenu, {
        "aria-label": "User menu actions",
        onAction: (key) => {
          router.push(items.find((item) => item.key === key)?.href || "/");
        },
        children: dropdownItems
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
export {
  UserDropdown
};
