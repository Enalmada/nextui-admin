// src/sidebar/companies-dropdown.tsx
import React from "react";
var CompaniesDropdown = ({ adminNavHeader }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center gap-2"
  }, adminNavHeader.logo, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-4"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "m-0 -mb-4 whitespace-nowrap text-xl font-medium text-default-900"
  }, adminNavHeader.name), /* @__PURE__ */ React.createElement("span", {
    className: "text-xs font-medium text-default-500"
  }, adminNavHeader.name2))));
};
export {
  CompaniesDropdown
};
