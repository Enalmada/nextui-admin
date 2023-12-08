'use client';

// sidebarbar/navbar.style
import React4 from "react";
import {usePathname} from "next/navigation";

// sidebarbar/navbar.styles.tsu
import {createContext, useContext} from "react";
var SidebarContext = createContext({
  collapsed: false,
  setCollapsed: () => {
  }
});
var useSidebarContext = () => {
  return useContext(SidebarContext);
};

// sidebarbar/navbar.styles.tsutEffec
import React from "react";
var CompaniesDropdown = ({ adminNavHeader }) => {
  return React.createElement("div", {
    className: "w-full "
  }, React.createElement("div", {
    className: "flex items-center gap-2"
  }, adminNavHeader.logo, React.createElement("div", {
    className: "flex flex-col gap-4"
  }, React.createElement("h3", {
    className: "m-0 -mb-4 whitespace-nowrap text-xl font-medium text-default-900"
  }, adminNavHeader.name), React.createElement("span", {
    className: "text-xs font-medium text-default-500"
  }, adminNavHeader.name2))));
};

// sidebarbar/navbar.styles.tsu
import React2 from "react";
import NextLink from "next/link";
import clsx from "clsx";
var SidebarItem = ({ icon, title, isActive, href = "" }) => {
  const { collapsed: _collapsed, setCollapsed } = useSidebarContext();
  const handleClick = () => {
    if (window.innerWidth < 768) {
      setCollapsed();
    }
  };
  return React2.createElement(NextLink, {
    href,
    className: "max-w-full text-default-900 active:bg-none"
  }, React2.createElement("div", {
    className: clsx(isActive ? "bg-primary-100 [&_svg_path]:fill-primary-500" : "hover:bg-default-100", "flex h-full min-h-[44px] w-full cursor-pointer items-center gap-2 rounded-xl px-3.5 transition-all duration-150 active:scale-[0.98]"),
    onClick: handleClick
  }, icon, React2.createElement("span", {
    className: "text-default-900"
  }, title)));
};

// sidebarbar/navbar.styles.tsu
import React3 from "react";
var SidebarMenu = ({ title, children }) => {
  return React3.createElement("div", {
    className: "flex flex-col gap-2"
  }, React3.createElement("span", {
    className: "text-xs font-normal "
  }, title), children);
};

// sidebarbar/navbar.styles.tsut
import {tv} from "@nextui-org/react";
var SidebarWrapper = tv({
  base: "bg-background transition-transform h-full fixed -translate-x-full w-64 shrink-0 z-[202] overflow-y-auto border-r border-divider flex-col py-6 px-3 md:ml-0 md:flex md:static md:h-screen md:translate-x-0 ",
  variants: {
    collapsed: {
      true: "translate-x-0 ml-0 [display:inherit]"
    }
  }
});
var Overlay = tv({
  base: "bg-[rgb(15_23_42/0.3)] fixed inset-0 z-[201] opacity-80 transition-opacity md:hidden md:z-auto md:opacity-100"
});
var Header = tv({
  base: "flex gap-8 items-center px-6"
});
var Body = tv({
  base: "flex flex-col gap-6 mt-9 px-2"
});
var Footer = tv({
  base: "flex items-center justify-center gap-6 pt-16 pb-8 px-8 md:pt-10 md:pb-0"
});
var Sidebar = Object.assign(SidebarWrapper, {
  Header,
  Body,
  Overlay,
  Footer
});

// sidebarbar/navbar.style

var ConditionalWrapper = ({
  condition,
  wrapper,
  children
}) => {
  if (children === undefined) {
    return null;
  }
  return condition ? wrapper(children) : React4.createElement(React4.Fragment, null, children);
};
var SidebarWrapper2 = ({ sidebarConfig, adminNavHeader }) => {
  const { collapsed, setCollapsed } = useSidebarContext();
  const pathname = usePathname();
  return React4.createElement("aside", {
    className: "sticky top-0 z-[202] h-screen"
  }, collapsed ? React4.createElement("div", {
    className: Sidebar.Overlay(),
    onClick: setCollapsed
  }) : null, React4.createElement("div", {
    className: Sidebar({
      collapsed
    })
  }, React4.createElement("div", {
    className: Sidebar.Header()
  }, React4.createElement(CompaniesDropdown, {
    adminNavHeader
  })), React4.createElement("div", {
    className: "flex h-full flex-col justify-between"
  }, React4.createElement("div", {
    className: Sidebar.Body()
  }, sidebarConfig.map((section, sectionIndex) => React4.createElement(ConditionalWrapper, {
    key: `section-${sectionIndex}`,
    condition: !!section.title,
    wrapper: (children) => React4.createElement(SidebarMenu, {
      title: section.title || ""
    }, children)
  }, section.items.map((item, itemIndex) => React4.createElement(SidebarItem, {
    key: `item-${itemIndex}`,
    isActive: pathname === item.href,
    title: item.title,
    icon: item.icon,
    href: item.href
  }))))))));
};
export {
  SidebarWrapper2 as SidebarWrapper
};
