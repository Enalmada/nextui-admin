// src/sidebar/collapse-items.tsx
import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import { ChevronUpIcon } from "../icons/sidebar/chevron-up-icon";
var CollapseItems = ({ icon, items, title }) => {
  const [_open, _setOpen] = useState(false);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex h-full cursor-pointer items-center gap-4"
  }, /* @__PURE__ */ React.createElement(Accordion, {
    className: "px-0"
  }, /* @__PURE__ */ React.createElement(AccordionItem, {
    indicator: /* @__PURE__ */ React.createElement(ChevronUpIcon, null),
    classNames: {
      indicator: "data-[open=true]:-rotate-180",
      trigger: "py-0 min-h-[44px] hover:bg-default-100 rounded-xl active:scale-[0.98] transition-transform px-3.5",
      title: "px-0 flex text-base gap-2 h-full items-center cursor-pointer"
    },
    "aria-label": "Accordion 1",
    title: /* @__PURE__ */ React.createElement("div", {
      className: "flex flex-row gap-2"
    }, /* @__PURE__ */ React.createElement("span", null, icon), /* @__PURE__ */ React.createElement("span", null, title))
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pl-12"
  }, items.map((item, index) => /* @__PURE__ */ React.createElement("span", {
    key: index,
    className: "flex w-full  text-default-500 transition-colors hover:text-default-900"
  }, item))))));
};
export {
  CollapseItems
};
