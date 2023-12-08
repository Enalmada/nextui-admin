'use client';

// sidebarbar/navbar.styles.tsu
import React2 from "react";
import {useRouter} from "next/navigation";
import {
Dropdown,
DropdownItem,
DropdownMenu,
DropdownTrigger,
NavbarItem
} from "@nextui-org/react";

// sidebarbar/navbar.styles.tsut
import React from "react";
import {useTheme as useNextTheme} from "@enalmada/next-themes";
import {Switch} from "@nextui-org/react";
var DarkModeSwitch = () => {
  const { setTheme, theme } = useNextTheme();
  return React.createElement(Switch, {
    isSelected: theme === "dark",
    onValueChange: (e) => setTheme(e ? "dark" : "light")
  });
};

// sidebarbar/navbar.styles.tsu

var UserDropdown = ({ userDropdownConfig }) => {
  const router = useRouter();
  const { user, trigger, items } = userDropdownConfig;
  const dropdownItems = items.map((item) => {
    if (item.isSpecial) {
      return React2.createElement(DropdownItem, {
        key: item.key,
        className: "h-14 gap-2",
        textValue: `Signed in as: ${user.email}`
      }, React2.createElement("p", {
        className: "font-semibold"
      }, "Signed in as"), React2.createElement("p", {
        className: "font-semibold"
      }, user.email));
    }
    return React2.createElement(DropdownItem, {
      key: item.key,
      color: item.color
    }, item.label);
  });
  dropdownItems.push(React2.createElement(DropdownItem, {
    key: "switch"
  }, React2.createElement(DarkModeSwitch, null)));
  return React2.createElement(Dropdown, null, React2.createElement(NavbarItem, null, React2.createElement(DropdownTrigger, null, trigger)), React2.createElement(DropdownMenu, {
    "aria-label": "User menu actions",
    onAction: (key) => {
      router.push(items.find((item) => item.key === key)?.href || "/");
    }
  }, dropdownItems));
};
export {
  UserDropdown
};
