import { extendTheme } from "@chakra-ui/react";
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
	brand: {
		primary: "#403f4c",
		secondary: "#1b2432",
		third: "#121420",
	},
};
const theme = extendTheme({ colors });
export default theme;
