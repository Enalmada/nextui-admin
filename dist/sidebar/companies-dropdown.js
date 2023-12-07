import React from 'react';
export const CompaniesDropdown = ({ adminNavHeader }) => {
    return (React.createElement("div", { className: "w-full " },
        React.createElement("div", { className: "flex items-center gap-2" },
            adminNavHeader.logo,
            React.createElement("div", { className: "flex flex-col gap-4" },
                React.createElement("h3", { className: "m-0 -mb-4 whitespace-nowrap text-xl font-medium text-default-900" }, adminNavHeader.name),
                React.createElement("span", { className: "text-xs font-medium text-default-500" }, adminNavHeader.name2)))));
};
