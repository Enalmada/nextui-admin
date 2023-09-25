// src/navbar/darkmodesw
import React from "react";

// src/navbar/darkmodeswitc
import {useEffect as useEffect2, useState} from "react";

// src/navbar/darkmodeswitch.tsxn.tsxt.ts
import {useEffect, useLayoutEffect} from "react";
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// src/navbar/darkmodeswitc
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

// src/navbar/darkmodesw
import {Navbar, NavbarContent} from "@nextui-org/react";

// src/navbar/darkmodeswitch.ts
import {createContext, useContext} from "react";
var SidebarContext = createContext({
  collapsed: false,
  setCollapsed: () => {
  }
});
var useSidebarContext = () => {
  return useContext(SidebarContext);
};

// src/navbar/darkmodeswitch.t
import {tv} from "@nextui-org/react";
var StyledBurgerButton = tv({
  base: "absolute flex flex-col justify-around w-6 h-6 bg-transparent border-none cursor-pointer padding-0 z-[202] focus:outline-none [&_div]:w-6 [&_div]:h-px [&_div]:bg-default-900 [&_div]:rounded-xl  [&_div]:transition-all  [&_div]:relative  [&_div]:origin-[1px] ",
  variants: {
    open: {
      true: "[&"
    }
  }
});

// src/navbar/darkmodeswitch.tsx
import {
jsxDEV
} from "react/jsx-dev-runtime";
var BurguerButton = () => {
  const { collapsed: _collapsed, setCollapsed } = useSidebarContext();
  return jsxDEV("div", {
    className: StyledBurgerButton(),
    onClick: setCollapsed,
    children: [
      jsxDEV("div", {}, undefined, false, undefined, this),
      jsxDEV("div", {}, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};

// src/navbar/darkmodeswitch.ts
import Image from "next/image";
import {useRouter} from "next/navigation";
import {
Avatar,
Dropdown,
DropdownItem,
DropdownMenu,
DropdownTrigger,
NavbarItem
} from "@nextui-org/react";

// src/navbar/darkmodeswitch.tsx
import {Switch} from "@nextui-org/react";
import {useTheme as useNextTheme} from "next-themes";
import {
jsxDEV as jsxDEV2
} from "react/jsx-dev-runtime";
var DarkModeSwitch = () => {
  const { setTheme, theme } = useNextTheme();
  return jsxDEV2(Switch, {
    isSelected: theme === "dark",
    onValueChange: (e) => setTheme(e ? "dark" : "light")
  }, undefined, false, undefined, this);
};

// src/navbar/darkmodeswitch.ts
import {
jsxDEV as jsxDEV3
} from "react/jsx-dev-runtime";
var UserDropdown = ({ userDropdownConfig }) => {
  const router = useRouter();
  const { user, items } = userDropdownConfig;
  const dropdownItems = items.map((item) => {
    if (item.isSpecial) {
      return jsxDEV3(DropdownItem, {
        className: "h-14 gap-2",
        textValue: `Signed in as: ${user.email}`,
        children: [
          jsxDEV3("p", {
            className: "font-semibold",
            children: "Signed in as"
          }, undefined, false, undefined, this),
          jsxDEV3("p", {
            className: "font-semibold",
            children: user.email
          }, undefined, false, undefined, this)
        ]
      }, item.key, true, undefined, this);
    }
    return jsxDEV3(DropdownItem, {
      color: item.color,
      children: item.label
    }, item.key, false, undefined, this);
  });
  dropdownItems.push(jsxDEV3(DropdownItem, {
    children: jsxDEV3(DarkModeSwitch, {}, undefined, false, undefined, this)
  }, "switch", false, undefined, this));
  return jsxDEV3(Dropdown, {
    children: [
      jsxDEV3(NavbarItem, {
        children: jsxDEV3(DropdownTrigger, {
          children: jsxDEV3(Avatar, {
            id: "avatar",
            isBordered: true,
            className: "transition-transform",
            color: "secondary",
            name: user.displayName || user.email || undefined,
            size: "sm",
            showFallback: true,
            fallback: jsxDEV3("span", {
              className: "inline-block h-[2.375rem] w-[2.375rem] overflow-hidden rounded-full bg-gray-100",
              children: [
                user.photoURL && jsxDEV3(Image, {
                  alt: "",
                  height: "100",
                  width: "100",
                  unoptimized: true,
                  src: user.photoURL
                }, undefined, false, undefined, this),
                !user.photoURL && jsxDEV3("svg", {
                  className: "h-full w-full text-gray-300",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    jsxDEV3("rect", {
                      x: "0.62854",
                      y: "0.359985",
                      width: "15",
                      height: "15",
                      rx: "7.5",
                      fill: "white"
                    }, undefined, false, undefined, this),
                    jsxDEV3("path", {
                      d: "M8.12421 7.20374C9.21151 7.20374 10.093 6.32229 10.093 5.23499C10.093 4.14767 9.21151 3.26624 8.12421 3.26624C7.0369 3.26624 6.15546 4.14767 6.15546 5.23499C6.15546 6.32229 7.0369 7.20374 8.12421 7.20374Z",
                      fill: "currentColor"
                    }, undefined, false, undefined, this),
                    jsxDEV3("path", {
                      d: "M11.818 10.5975C10.2992 12.6412 7.42106 13.0631 5.37731 11.5537C5.01171 11.2818 4.69296 10.9631 4.42107 10.5975C4.28982 10.4006 4.27107 10.1475 4.37419 9.94123L4.51482 9.65059C4.84296 8.95684 5.53671 8.51624 6.30546 8.51624H9.95231C10.7023 8.51624 11.3867 8.94749 11.7242 9.62249L11.8742 9.93184C11.968 10.1475 11.9586 10.4006 11.818 10.5975Z",
                      fill: "currentColor"
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      jsxDEV3(DropdownMenu, {
        "aria-label": "User menu actions",
        onAction: (key) => {
          router.push(items.find((item) => item.key === key)?.href || "/");
        },
        children: dropdownItems
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};

// src/navbar/darkmodesw
import {
jsxDEV as jsxDEV4
} from "react/jsx-dev-runtime";
var NavbarWrapper = ({ userDropdownConfig, children }) => {
  return jsxDEV4("div", {
    className: "relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden",
    children: [
      jsxDEV4(Navbar, {
        isBordered: true,
        className: "w-full",
        classNames: {
          wrapper: "w-full max-w-full"
        },
        children: [
          jsxDEV4(NavbarContent, {
            className: "md:hidden",
            children: jsxDEV4(BurguerButton, {}, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          jsxDEV4(NavbarContent, {
            className: "w-full max-md:hidden"
          }, undefined, false, undefined, this),
          jsxDEV4(NavbarContent, {
            justify: "end",
            className: "w-fit data-[justify=end]:flex-grow-0",
            children: jsxDEV4(NavbarContent, {
              children: jsxDEV4(UserDropdown, {
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

// src/navbar/darkmodeswit
import {usePathname} from "next/navigation";

// src/navbar/darkmodeswitch.tsxn.tsx
import {
jsxDEV as jsxDEV5
} from "react/jsx-dev-runtime";
var CompaniesDropdown = ({ adminNavHeader }) => {
  return jsxDEV5("div", {
    className: "w-full ",
    children: jsxDEV5("div", {
      className: "flex items-center gap-2",
      children: [
        adminNavHeader.logo,
        jsxDEV5("div", {
          className: "flex flex-col gap-4",
          children: [
            jsxDEV5("h3", {
              className: "m-0 -mb-4 whitespace-nowrap text-xl font-medium text-default-900",
              children: adminNavHeader.name
            }, undefined, false, undefined, this),
            jsxDEV5("span", {
              className: "text-xs font-medium text-default-500",
              children: adminNavHeader.name2
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
};

// src/navbar/darkmodeswitch.ts
import NextLink from "next/link";
import clsx from "clsx";
import {
jsxDEV as jsxDEV6
} from "react/jsx-dev-runtime";
var SidebarItem = ({ icon, title, isActive, href = "" }) => {
  const { collapsed: _collapsed, setCollapsed } = useSidebarContext();
  const handleClick = () => {
    if (window.innerWidth < 768) {
      setCollapsed();
    }
  };
  return jsxDEV6(NextLink, {
    href,
    className: "max-w-full text-default-900 active:bg-none",
    children: jsxDEV6("div", {
      className: clsx(isActive ? "bg-primary-100 [&_svg_path]:fill-primary-500" : "hover:bg-default-100", "flex h-full min-h-[44px] w-full cursor-pointer items-center gap-2 rounded-xl px-3.5 transition-all duration-150 active:scale-[0.98]"),
      onClick: handleClick,
      children: [
        icon,
        jsxDEV6("span", {
          className: "text-default-900",
          children: title
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
};

// src/navbar/darkmodeswitch.ts
import {
jsxDEV as jsxDEV7
} from "react/jsx-dev-runtime";
var SidebarMenu = ({ title, children }) => {
  return jsxDEV7("div", {
    className: "flex flex-col gap-2",
    children: [
      jsxDEV7("span", {
        className: "text-xs font-normal ",
        children: title
      }, undefined, false, undefined, this),
      children
    ]
  }, undefined, true, undefined, this);
};

// src/navbar/darkmodeswitch.tsx
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

// src/navbar/darkmodeswit
import {
jsxDEV as jsxDEV8
} from "react/jsx-dev-runtime";
var ConditionalWrapper = ({ condition, wrapper, children }) => condition ? wrapper(children) : children;
var SidebarWrapper2 = ({ sidebarConfig, adminNavHeader }) => {
  const { collapsed, setCollapsed } = useSidebarContext();
  const pathname = usePathname();
  return jsxDEV8("aside", {
    className: "sticky top-0 z-[202] h-screen",
    children: [
      collapsed ? jsxDEV8("div", {
        className: Sidebar.Overlay(),
        onClick: setCollapsed
      }, undefined, false, undefined, this) : null,
      jsxDEV8("div", {
        className: Sidebar({
          collapsed
        }),
        children: [
          jsxDEV8("div", {
            className: Sidebar.Header(),
            children: jsxDEV8(CompaniesDropdown, {
              adminNavHeader
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          jsxDEV8("div", {
            className: "flex h-full flex-col justify-between",
            children: jsxDEV8("div", {
              className: Sidebar.Body(),
              children: sidebarConfig.map((section, sectionIndex) => jsxDEV8(ConditionalWrapper, {
                condition: !!section.title,
                wrapper: (children) => jsxDEV8(SidebarMenu, {
                  title: section.title || "",
                  children
                }, undefined, false, undefined, this),
                children: section.items.map((item, itemIndex) => jsxDEV8(SidebarItem, {
                  isActive: pathname === item.href,
                  title: item.title,
                  icon: item.icon,
                  href: item.href
                }, `item-${itemIndex}`, false, undefined, this))
              }, `section-${sectionIndex}`, false, undefined, this))
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
};

// src/navbar/darkmodesw
import {
jsxDEV as jsxDEV9
} from "react/jsx-dev-runtime";
var Layout = ({ sidebarConfig, adminNavHeader, userDropdownConfig, children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [_, setLocked] = useLockedBody(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };
  return jsxDEV9(SidebarContext.Provider, {
    value: {
      collapsed: sidebarOpen,
      setCollapsed: handleToggleSidebar
    },
    children: jsxDEV9("section", {
      className: "flex",
      children: [
        jsxDEV9(SidebarWrapper2, {
          sidebarConfig,
          adminNavHeader
        }, undefined, false, undefined, this),
        jsxDEV9(NavbarWrapper, {
          userDropdownConfig,
          children
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
};

// src/navbar/darkmodeswitch.
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
import {
jsxDEV as jsxDEV10
} from "react/jsx-dev-runtime";
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
  return jsxDEV10("div", {
    className: " flex w-full flex-col gap-4",
    children: [
      jsxDEV10(Table, {
        sortDescriptor,
        onSortChange: (sortDescriptor2) => handleSortChange(sortDescriptor2),
        "aria-label": "Table for model rows",
        selectionMode: "single",
        onRowAction: (key) => linkFunction(key),
        children: [
          jsxDEV10(TableHeader, {
            columns,
            children: (column) => jsxDEV10(TableColumn, {
              hideHeader: column.key === "actions",
              align: column.align === "center" ? "center" : "start",
              allowsSorting: column.allowsSorting,
              children: column.label
            }, column.key, false, undefined, this)
          }, undefined, false, undefined, this),
          jsxDEV10(TableBody, {
            items: items || [],
            emptyContent: items ? emptyContent : " ",
            isLoading,
            loadingContent: jsxDEV10(Spinner, {
              label: "Loading..."
            }, undefined, false, undefined, this),
            children: (item) => jsxDEV10(TableRow, {
              children: (columnKey) => jsxDEV10(TableCell, {
                children: renderRow({ item, columnKey })
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      jsxDEV10("div", {
        className: "mb-3 mt-3 flex items-center justify-center gap-2",
        children: [
          jsxDEV10(Button, {
            size: "sm",
            variant: "flat",
            color: "secondary",
            isDisabled: pageDescriptor?.page === 1,
            onPress: () => {
              if (pageDescriptor && setPageDescriptor) {
                const page = pageDescriptor.page > 1 ? pageDescriptor.page - 1 : pageDescriptor.page;
                setPageDescriptor({ ...pageDescriptor, page });
              }
            },
            children: "Previous"
          }, undefined, false, undefined, this),
          jsxDEV10("div", {
            className: "flex items-center text-gray-400",
            children: pageDescriptor?.page
          }, undefined, false, undefined, this),
          jsxDEV10(Button, {
            size: "sm",
            variant: "flat",
            color: "secondary",
            isDisabled: hasMore === false,
            onPress: () => {
              if (pageDescriptor && setPageDescriptor) {
                const page = pageDescriptor.page + 1;
                setPageDescriptor({ ...pageDescriptor, page });
              }
            },
            children: "Next"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
};

// src/navbar/darkmodeswitch.tsx
import {useState as useState2} from "react";
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
    return jsxDEV11(TableWrapper, {
      ...props,
      sortDescriptor,
      setSortDescriptor,
      pageDescriptor,
      setPageDescriptor
    }, undefined, false, undefined, this);
  };
  return {
    TableWrapperComponent,
    sortDescriptor,
    setSortDescriptor,
    pageDescriptor,
    setPageDescriptor
  };
}
import {
jsxDEV as jsxDEV11
} from "react/jsx-dev-runtime";
export {
  useTableWrapper,
  TableWrapper,
  Layout
};
