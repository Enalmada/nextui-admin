// node_modules/@enalmad
import React9 from "react";

// node_modules/@enalmada/n
import {useEffect as useEffect2, useState} from "react";

// node_modules/@enalmada/next-themes/dis
import {useEffect, useLayoutEffect} from "react";
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// node_modules/@enalmada/n
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

// node_modules/@enalmad
import React4 from "react";
import {Navbar, NavbarContent} from "@nextui-org/react";

// node_modules/@enalmada/next-t
import React from "react";

// node_modules/@enalmada/next-
import {createContext, useContext} from "react";
var SidebarContext = createContext({
  collapsed: false,
  setCollapsed: () => {
  }
});
var useSidebarContext = () => {
  return useContext(SidebarContext);
};

// node_modules/@enalmada/next
import {tv} from "@nextui-org/react";
var StyledBurgerButton = tv({
  base: "absolute flex flex-col justify-around w-6 h-6 bg-transparent border-none cursor-pointer padding-0 z-[202] focus:outline-none [&_div]:w-6 [&_div]:h-px [&_div]:bg-default-900 [&_div]:rounded-xl  [&_div]:transition-all  [&_div]:relative  [&_div]:origin-[1px] ",
  variants: {
    open: {
      true: "[&"
    }
  }
});

// node_modules/@enalmada/next-t
var BurguerButton = () => {
  const { collapsed: _collapsed, setCollapsed } = useSidebarContext();
  return React.createElement("div", {
    className: StyledBurgerButton(),
    onClick: setCollapsed
  }, React.createElement("div", null), React.createElement("div", null));
};

// node_modules/@enalmada/next-
import React3 from "react";
import {useRouter} from "next/navigation";
import {
Dropdown,
DropdownItem,
DropdownMenu,
DropdownTrigger,
NavbarItem
} from "@nextui-org/react";

// node_modules/@enalmada/next-t
import React2 from "react";

// node_modules/@enalmada/next-themes/dist/index.mjs
import k, {Fragment as U, createContext as _, useCallback as T, useContext as D, useEffect as C, useState as I, useMemo as j, memo as z} from "react";
var P = ["light", "dark"];
var L = "(prefers-color-scheme: dark)";
var J = typeof window > "u";
var M = _(undefined);
var V = { setTheme: (e) => {
}, themes: [] };
var W = () => D(M) ?? V;
var q = z(({ forcedTheme: e, storageKey: d, attribute: s, enableSystem: $, enableColorScheme: a, defaultTheme: o, value: n, attrs: p, nonce: f }) => {
  let y = o === "system", g = (() => s === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${p.map((l) => `'${l}'`).join(",")})`};` : `var d=document.documentElement,n='${s}',s='setAttribute';`)(), i = (() => a ? (P.includes(o) ? o : null) ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "")(), m = (c, l = false, v = true) => {
    let u = n ? n[c] : c, x = l ? c + "|| ''" : `'${u}'`, t = "";
    return a && v && !l && P.includes(c) && (t += `d.style.colorScheme = '${c}';`), s === "class" ? l || u ? t += `c.add(${x})` : t += "null" : u && (t += `d[s](n,${x})`), t;
  }, w = (() => e ? `!function(){${g}${m(e)}}()` : $ ? `!function(){try{${g}var e=localStorage.getItem('${d}');if('system'===e||(!e&&${y})){var t='${L}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m("dark")}}else{${m("light")}}}else if(e){${n ? `var x=${JSON.stringify(n)};` : ""}${m(n ? "x[e]" : "e", true)}}${y ? "" : "else{" + m(o, false, false) + "}"}${i}}catch(e){}}()` : `!function(){try{${g}var e=localStorage.getItem('${d}');if(e){${n ? `var x=${JSON.stringify(n)};` : ""}${m(n ? "x[e]" : "e", true)}}else{${m(o, false, false)};}${i}}catch(t){}}();`)();
  return k.createElement("script", { nonce: typeof window > "u" ? f : "", dangerouslySetInnerHTML: { __html: w } });
}, () => true);

// node_modules/@enalmada/next-t
import {Switch} from "@nextui-org/react";
var DarkModeSwitch = () => {
  const { setTheme, theme } = W();
  return React2.createElement(Switch, {
    isSelected: theme === "dark",
    onValueChange: (e) => setTheme(e ? "dark" : "light")
  });
};

// node_modules/@enalmada/next-
var UserDropdown = ({ userDropdownConfig }) => {
  const router = useRouter();
  const { user, trigger, items } = userDropdownConfig;
  const dropdownItems = items.map((item) => {
    if (item.isSpecial) {
      return React3.createElement(DropdownItem, {
        className: "h-14 gap-2",
        textValue: `Signed in as: ${user.email}`,
        key: item.key
      }, React3.createElement("p", {
        className: "font-semibold"
      }, "Signed in as"), React3.createElement("p", {
        className: "font-semibold"
      }, user.email));
    }
    return React3.createElement(DropdownItem, {
      color: item.color,
      key: item.key
    }, item.label);
  });
  dropdownItems.push(React3.createElement(DropdownItem, {
    key: "switch"
  }, React3.createElement(DarkModeSwitch, null)));
  return React3.createElement(Dropdown, null, React3.createElement(NavbarItem, null, React3.createElement(DropdownTrigger, null, trigger)), React3.createElement(DropdownMenu, {
    "aria-label": "User menu actions",
    onAction: (key) => {
      router.push(items.find((item) => item.key === key)?.href || "/");
    }
  }, dropdownItems));
};

// node_modules/@enalmad
var NavbarWrapper = ({ userDropdownConfig, children }) => {
  return React4.createElement("div", {
    className: "relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"
  }, React4.createElement(Navbar, {
    isBordered: true,
    className: "w-full",
    classNames: {
      wrapper: "w-full max-w-full"
    }
  }, React4.createElement(NavbarContent, {
    className: "md:hidden"
  }, React4.createElement(BurguerButton, null)), React4.createElement(NavbarContent, {
    className: "w-full max-md:hidden"
  }), React4.createElement(NavbarContent, {
    justify: "end",
    className: "w-fit data-[justify=end]:flex-grow-0"
  }, React4.createElement(NavbarContent, null, React4.createElement(UserDropdown, {
    userDropdownConfig
  })))), children);
};

// node_modules/@enalmada/
import React8 from "react";
import {usePathname} from "next/navigation";

// node_modules/@enalmada/next-themes
import React5 from "react";
var CompaniesDropdown = ({ adminNavHeader }) => {
  return React5.createElement("div", {
    className: "w-full "
  }, React5.createElement("div", {
    className: "flex items-center gap-2"
  }, adminNavHeader.logo, React5.createElement("div", {
    className: "flex flex-col gap-4"
  }, React5.createElement("h3", {
    className: "m-0 -mb-4 whitespace-nowrap text-xl font-medium text-default-900"
  }, adminNavHeader.name), React5.createElement("span", {
    className: "text-xs font-medium text-default-500"
  }, adminNavHeader.name2))));
};

// node_modules/@enalmada/next-
import React6 from "react";
import NextLink from "next/link";
import clsx from "clsx";
var SidebarItem = ({ icon, title, isActive, href = "" }) => {
  const { collapsed: _collapsed, setCollapsed } = useSidebarContext();
  const handleClick = () => {
    if (window.innerWidth < 768) {
      setCollapsed();
    }
  };
  return React6.createElement(NextLink, {
    href,
    className: "max-w-full text-default-900 active:bg-none"
  }, React6.createElement("div", {
    className: clsx(isActive ? "bg-primary-100 [&_svg_path]:fill-primary-500" : "hover:bg-default-100", "flex h-full min-h-[44px] w-full cursor-pointer items-center gap-2 rounded-xl px-3.5 transition-all duration-150 active:scale-[0.98]"),
    onClick: handleClick
  }, icon, React6.createElement("span", {
    className: "text-default-900"
  }, title)));
};

// node_modules/@enalmada/next-
import React7 from "react";
var SidebarMenu = ({ title, children }) => {
  return React7.createElement("div", {
    className: "flex flex-col gap-2"
  }, React7.createElement("span", {
    className: "text-xs font-normal "
  }, title), children);
};

// node_modules/@enalmada/next-t
import {tv as tv2} from "@nextui-org/react";
var SidebarWrapper = tv2({
  base: "bg-background transition-transform h-full fixed -translate-x-full w-64 shrink-0 z-[202] overflow-y-auto border-r border-divider flex-col py-6 px-3 md:ml-0 md:flex md:static md:h-screen md:translate-x-0 ",
  variants: {
    collapsed: {
      true: "translate-x-0 ml-0 [display:inherit]"
    }
  }
});
var Overlay = tv2({
  base: "bg-[rgb(15_23_42/0.3)] fixed inset-0 z-[201] opacity-80 transition-opacity md:hidden md:z-auto md:opacity-100"
});
var Header = tv2({
  base: "flex gap-8 items-center px-6"
});
var Body = tv2({
  base: "flex flex-col gap-6 mt-9 px-2"
});
var Footer = tv2({
  base: "flex items-center justify-center gap-6 pt-16 pb-8 px-8 md:pt-10 md:pb-0"
});
var Sidebar = Object.assign(SidebarWrapper, {
  Header,
  Body,
  Overlay,
  Footer
});

// node_modules/@enalmada/
var ConditionalWrapper = ({ condition, wrapper, children }) => condition ? wrapper(children) : children;
var SidebarWrapper2 = ({ sidebarConfig, adminNavHeader }) => {
  const { collapsed, setCollapsed } = useSidebarContext();
  const pathname = usePathname();
  return React8.createElement("aside", {
    className: "sticky top-0 z-[202] h-screen"
  }, collapsed ? React8.createElement("div", {
    className: Sidebar.Overlay(),
    onClick: setCollapsed
  }) : null, React8.createElement("div", {
    className: Sidebar({
      collapsed
    })
  }, React8.createElement("div", {
    className: Sidebar.Header()
  }, React8.createElement(CompaniesDropdown, {
    adminNavHeader
  })), React8.createElement("div", {
    className: "flex h-full flex-col justify-between"
  }, React8.createElement("div", {
    className: Sidebar.Body()
  }, sidebarConfig.map((section, sectionIndex) => React8.createElement(ConditionalWrapper, {
    condition: !!section.title,
    wrapper: (children) => React8.createElement(SidebarMenu, {
      title: section.title || ""
    }, children),
    key: `section-${sectionIndex}`
  }, section.items.map((item, itemIndex) => React8.createElement(SidebarItem, {
    isActive: pathname === item.href,
    title: item.title,
    icon: item.icon,
    href: item.href,
    key: `item-${itemIndex}`
  }))))))));
};

// node_modules/@enalmad
var Layout = ({ sidebarConfig, adminNavHeader, userDropdownConfig, children }) => {
  const [sidebarOpen, setSidebarOpen] = React9.useState(false);
  const [_2, setLocked] = useLockedBody(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };
  return React9.createElement(SidebarContext.Provider, {
    value: {
      collapsed: sidebarOpen,
      setCollapsed: handleToggleSidebar
    }
  }, React9.createElement("section", {
    className: "flex"
  }, React9.createElement(SidebarWrapper2, {
    sidebarConfig,
    adminNavHeader
  }), React9.createElement(NavbarWrapper, {
    userDropdownConfig
  }, children)));
};

// node_modules/@enalmada/nex
import React10 from "react";
import {
Button,
Spinner,
Table,
TableBody,
TableCell,
TableColumn,
TableHeader,
TableRow
} from "@nextui-org/react";
var TableWrapper = (props) => {
  const {
    columns,
    items,
    renderRow,
    emptyContent,
    sortDescriptor,
    setSortDescriptor,
    pageDescriptor,
    setPageDescriptor,
    hasMore,
    isLoading,
    linkFunction
  } = props;
  const handleSortChange = (sortDescriptor2) => {
    if (setSortDescriptor) {
      setSortDescriptor(sortDescriptor2);
    }
  };
  return React10.createElement("div", {
    className: " flex w-full flex-col gap-4"
  }, React10.createElement(Table, {
    sortDescriptor,
    onSortChange: (sortDescriptor2) => handleSortChange(sortDescriptor2),
    "aria-label": "Table for model rows",
    selectionMode: "single",
    onRowAction: (key) => linkFunction(key)
  }, React10.createElement(TableHeader, {
    columns
  }, (column) => React10.createElement(TableColumn, {
    hideHeader: column.key === "actions",
    align: column.align === "center" ? "center" : "start",
    allowsSorting: column.allowsSorting,
    key: column.key
  }, column.label)), React10.createElement(TableBody, {
    items: items || [],
    emptyContent: items ? emptyContent : " ",
    isLoading,
    loadingContent: React10.createElement(Spinner, {
      label: "Loading..."
    })
  }, (item) => React10.createElement(TableRow, null, (columnKey) => React10.createElement(TableCell, null, renderRow({ item, columnKey }))))), React10.createElement("div", {
    className: "mb-3 mt-3 flex items-center justify-center gap-2"
  }, React10.createElement(Button, {
    size: "sm",
    variant: "flat",
    color: "secondary",
    isDisabled: pageDescriptor?.page === 1,
    onPress: () => {
      if (pageDescriptor && setPageDescriptor) {
        const page = pageDescriptor.page > 1 ? pageDescriptor.page - 1 : pageDescriptor.page;
        setPageDescriptor({ ...pageDescriptor, page });
      }
    }
  }, "Previous"), React10.createElement("div", {
    className: "flex items-center text-gray-400"
  }, pageDescriptor?.page), React10.createElement(Button, {
    size: "sm",
    variant: "flat",
    color: "secondary",
    isDisabled: hasMore === false,
    onPress: () => {
      if (pageDescriptor && setPageDescriptor) {
        const page = pageDescriptor.page + 1;
        setPageDescriptor({ ...pageDescriptor, page });
      }
    }
  }, "Next")));
};

// node_modules/@enalmada/next-t
import React11, {useState as useState2} from "react";
function useTableWrapper() {
  const [sortDescriptor, setSortDescriptor] = useState2({
    column: "id",
    direction: "descending"
  });
  const [pageDescriptor, setPageDescriptor] = useState2({
    page: 1,
    pageSize: 50
  });
  const TableWrapperComponent = (props) => {
    return React11.createElement(TableWrapper, {
      ...props,
      sortDescriptor,
      setSortDescriptor,
      pageDescriptor,
      setPageDescriptor
    });
  };
  return {
    TableWrapperComponent,
    sortDescriptor,
    setSortDescriptor,
    pageDescriptor,
    setPageDescriptor
  };
}
export {
  useTableWrapper,
  TableWrapper,
  Layout
};
