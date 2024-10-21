// src/layout/layout-context.ts
import { createContext, useContext } from "react";
var SidebarContext = createContext({
  collapsed: false,
  setCollapsed: () => {
  }
});
var useSidebarContext = () => {
  return useContext(SidebarContext);
};
export {
  useSidebarContext,
  SidebarContext
};
