import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSidebarContext } from '../layout/layout-context';
import { StyledBurgerButton } from './navbar.styles';
export const BurguerButton = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { collapsed: _collapsed, setCollapsed } = useSidebarContext();
    return (_jsxs("div", { className: StyledBurgerButton(), 
        // open={collapsed}
        onClick: setCollapsed, children: [_jsx("div", {}), _jsx("div", {})] }));
};
