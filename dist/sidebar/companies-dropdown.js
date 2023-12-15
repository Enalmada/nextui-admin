// src/sidebar/companies-dropdown.tsx
import {
jsxDEV
} from "react/jsx-dev-runtime";
var CompaniesDropdown = ({ adminNavHeader }) => {
  return jsxDEV("div", {
    className: "w-full ",
    children: jsxDEV("div", {
      className: "flex items-center gap-2",
      children: [
        adminNavHeader.logo,
        jsxDEV("div", {
          className: "flex flex-col gap-4",
          children: [
            jsxDEV("h3", {
              className: "m-0 -mb-4 whitespace-nowrap text-xl font-medium text-default-900",
              children: adminNavHeader.name
            }, undefined, false, undefined, this),
            jsxDEV("span", {
              className: "text-xs font-medium text-default-500",
              children: adminNavHeader.name2
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
};
export {
  CompaniesDropdown
};
