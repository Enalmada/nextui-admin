import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const SidebarMenu = ({ title, children }) => {
    return (_jsxs("div", { className: "flex flex-col gap-2", children: [_jsx("span", { className: "text-xs font-normal ", children: title }), children] }));
};
