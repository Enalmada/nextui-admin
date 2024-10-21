// src/navbar/burguer-button.tsx
import React from "react";
import { useSidebarContext } from "../layout/layout-context";
import { StyledBurgerButton } from "./navbar.styles";
var BurguerButton = () => {
  const { collapsed: _collapsed, setCollapsed } = useSidebarContext();
  return /* @__PURE__ */ React.createElement("div", {
    className: StyledBurgerButton(),
    onClick: setCollapsed
  }, /* @__PURE__ */ React.createElement("div", null), /* @__PURE__ */ React.createElement("div", null));
};
export {
  BurguerButton
};
