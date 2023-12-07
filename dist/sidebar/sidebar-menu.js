import React from 'react';
export const SidebarMenu = ({ title, children }) => {
    return (React.createElement("div", { className: "flex flex-col gap-2" },
        React.createElement("span", { className: "text-xs font-normal " }, title),
        children));
};
