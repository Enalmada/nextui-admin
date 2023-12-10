'use client';

// sidebarbar/navbar.sty
import React3 from "react";

// sidebarbar/navbar.styles
import {useEffect as useEffect2, useState} from "react";

// sidebarbar/navbar.styles.tssxEffect.ts
import {useEffect, useLayoutEffect} from "react";
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// sidebarbar/navbar.styles
var useLockedBody = (initialLocked = false) => {
  const [locked, setLocked] = useState(initialLocked);
  useIsomorphicLayoutEffect(() => {
    if (!locked) {
      return;
    }
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    const root = document.getElementById("___gatsby");
    const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;
    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }
    return () => {
      document.body.style.overflow = originalOverflow;
      if (scrollBarWidth) {
        document.body.style.paddingRight = originalPaddingRight;
      }
    };
  }, [locked]);
  useEffect2(() => {
    if (locked !== initialLocked) {
      setLocked(initialLocked);
    }
  }, [initialLocked]);
  return [locked, setLocked];
};

// sidebarbar/navbar.sty
import React2 from "react";
import {Navbar, NavbarContent} from "@nextui-org/react";

// sidebarbar/navbar.styles.tssx
import React from "react";

// sidebarbar/navbar.styles.tss
import {createContext, useContext} from "react";
var SidebarContext = createContext({
  collapsed: false,
  setCollapsed: () => {
  }
});
var useSidebarContext = () => {
  return useContext(SidebarContext);
};

// sidebarbar/navbar.styles.ts
import {tv} from "@nextui-org/react";
var StyledBurgerButton = tv({
  base: "absolute flex flex-col justify-around w-6 h-6 bg-transparent border-none cursor-pointer padding-0 z-[202] focus:outline-none [&_div]:w-6 [&_div]:h-px [&_div]:bg-default-900 [&_div]:rounded-xl  [&_div]:transition-all  [&_div]:relative  [&_div]:origin-[1px] ",
  variants: {
    open: {
      true: "[&"
    }
  }
});

// sidebarbar/navbar.styles.tssx
var BurguerButton = () => {
  const { collapsed: _collapsed, setCollapsed } = useSidebarContext();
  return React.createElement("div", {
    className: StyledBurgerButton(),
    onClick: setCollapsed
  }, React.createElement("div", null), React.createElement("div", null));
};

// sidebarbar/navbar.sty
import {UserDropdown} from "../navbar/user-dropdown";
var NavbarWrapper = ({ userDropdownConfig, children }) => {
  return React2.createElement("div", {
    className: "relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"
  }, React2.createElement(Navbar, {
    isBordered: true,
    className: "w-full",
    classNames: {
      wrapper: "w-full max-w-full"
    }
  }, React2.createElement(NavbarContent, {
    className: "md:hidden"
  }, React2.createElement(BurguerButton, null)), React2.createElement(NavbarContent, {
    className: "w-full max-md:hidden"
  }), React2.createElement(NavbarContent, {
    justify: "end",
    className: "w-fit data-[justify=end]:flex-grow-0"
  }, React2.createElement(NavbarContent, null, React2.createElement(UserDropdown, {
    userDropdownConfig
  })))), children);
};

// sidebarbar/navbar.sty
import {SidebarWrapper} from "../sidebar/sidebar";

var Layout = ({ sidebarConfig, adminNavHeader, userDropdownConfig, children }) => {
  const [sidebarOpen, setSidebarOpen] = React3.useState(false);
  const [_, setLocked] = useLockedBody(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };
  return React3.createElement(SidebarContext.Provider, {
    value: {
      collapsed: sidebarOpen,
      setCollapsed: handleToggleSidebar
    }
  }, React3.createElement("section", {
    className: "flex"
  }, React3.createElement(SidebarWrapper, {
    sidebarConfig,
    adminNavHeader
  }), React3.createElement(NavbarWrapper, {
    userDropdownConfig
  }, children)));
};
export {
  Layout
};
