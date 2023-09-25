import { jsx as _jsx } from "react/jsx-runtime";
import { Switch } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
export const DarkModeSwitch = () => {
    const { setTheme, theme } = useNextTheme();
    return (_jsx(Switch, { isSelected: theme === 'dark', onValueChange: (e) => setTheme(e ? 'dark' : 'light') }));
};
