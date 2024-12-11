// src/navbar/darkmodeswitch.tsx
import { useTheme as useNextTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import React from "react";
var DarkModeSwitch = () => {
  const { setTheme, theme } = useNextTheme();
  return /* @__PURE__ */ React.createElement(Switch, {
    isSelected: theme === "dark",
    onValueChange: (e) => setTheme(e ? "dark" : "light")
  });
};
export {
  DarkModeSwitch
};
