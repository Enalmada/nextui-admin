// src/navbar/darkmodeswitch.tsx
import {useTheme as useNextTheme} from "@enalmada/next-themes";
import {Switch} from "@nextui-org/react";
import {
jsxDEV
} from "react/jsx-dev-runtime";
var DarkModeSwitch = () => {
  const { setTheme, theme } = useNextTheme();
  return jsxDEV(Switch, {
    isSelected: theme === "dark",
    onValueChange: (e) => setTheme(e ? "dark" : "light")
  }, undefined, false, undefined, this);
};
export {
  DarkModeSwitch
};
