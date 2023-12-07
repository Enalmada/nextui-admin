import React from 'react';
import { useTheme as useNextTheme } from '@enalmada/next-themes';
import { Switch } from '@nextui-org/react';
export const DarkModeSwitch = () => {
    const { setTheme, theme } = useNextTheme();
    return (React.createElement(Switch, { isSelected: theme === 'dark', onValueChange: (e) => setTheme(e ? 'dark' : 'light') }));
};
