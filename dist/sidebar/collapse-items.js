import React, { useState } from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { ChevronUpIcon } from '../icons/sidebar/chevron-up-icon';
export const CollapseItems = ({ icon, items, title }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_open, _setOpen] = useState(false);
    return (React.createElement("div", { className: "flex h-full cursor-pointer items-center gap-4" },
        React.createElement(Accordion, { className: "px-0" },
            React.createElement(AccordionItem, { indicator: React.createElement(ChevronUpIcon, null), classNames: {
                    indicator: 'data-[open=true]:-rotate-180',
                    trigger: 'py-0 min-h-[44px] hover:bg-default-100 rounded-xl active:scale-[0.98] transition-transform px-3.5',
                    title: 'px-0 flex text-base gap-2 h-full items-center cursor-pointer',
                }, "aria-label": "Accordion 1", title: React.createElement("div", { className: "flex flex-row gap-2" },
                    React.createElement("span", null, icon),
                    React.createElement("span", null, title)) },
                React.createElement("div", { className: "pl-12" }, items.map((item, index) => (React.createElement("span", { key: index, className: "flex w-full  text-default-500 transition-colors hover:text-default-900" }, item))))))));
};
