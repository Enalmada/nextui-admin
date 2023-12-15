// src/navbar/burguer-button.tsx
import {useSidebarContext} from "../layout/layout-context";
import {StyledBurgerButton} from "./navbar.styles";
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
export {
  BurguerButton
};
