import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const CompaniesDropdown = ({ adminNavHeader }) => {
    return (_jsx("div", { className: "w-full ", children: _jsxs("div", { className: "flex items-center gap-2", children: [adminNavHeader.logo, _jsxs("div", { className: "flex flex-col gap-4", children: [_jsx("h3", { className: "m-0 -mb-4 whitespace-nowrap text-xl font-medium text-default-900", children: adminNavHeader.name }), _jsx("span", { className: "text-xs font-medium text-default-500", children: adminNavHeader.name2 })] })] }) }));
};
