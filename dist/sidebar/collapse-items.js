// src/sidebar/collapse-items.tsx
import {useState} from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {ChevronUpIcon} from "../icons/sidebar/chevron-up-icon";
import {
jsxDEV
} from "react/jsx-dev-runtime";
var CollapseItems = ({ icon, items, title }) => {
  const [_open, _setOpen] = useState(false);
  return jsxDEV("div", {
    className: "flex h-full cursor-pointer items-center gap-4",
    children: jsxDEV(Accordion, {
      className: "px-0",
      children: jsxDEV(AccordionItem, {
        indicator: jsxDEV(ChevronUpIcon, {}, undefined, false, undefined, this),
        classNames: {
          indicator: "data-[open=true]:-rotate-180",
          trigger: "py-0 min-h-[44px] hover:bg-default-100 rounded-xl active:scale-[0.98] transition-transform px-3.5",
          title: "px-0 flex text-base gap-2 h-full items-center cursor-pointer"
        },
        "aria-label": "Accordion 1",
        title: jsxDEV("div", {
          className: "flex flex-row gap-2",
          children: [
            jsxDEV("span", {
              children: icon
            }, undefined, false, undefined, this),
            jsxDEV("span", {
              children: title
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        children: jsxDEV("div", {
          className: "pl-12",
          children: items.map((item, index) => jsxDEV("span", {
            className: "flex w-full  text-default-500 transition-colors hover:text-default-900",
            children: item
          }, index, false, undefined, this))
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
};
export {
  CollapseItems
};
