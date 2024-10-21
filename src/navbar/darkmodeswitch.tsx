import { useTheme as useNextTheme } from "@enalmada/next-themes";
import { Switch } from "@nextui-org/react";
import React from "react";

export const DarkModeSwitch = () => {
	const { setTheme, theme } = useNextTheme();
	return (
		<Switch
			isSelected={theme === "dark"}
			onValueChange={(e) => setTheme(e ? "dark" : "light")}
		/>
	);
};
