import { extendTheme } from "@chakra-ui/react";

const colors = {
	brand: {
		primary: "#003459",
		light: "#007EA7",
		// 403f4c
		secondary: "#1b2432",
		third: "#121420",
	},
};
const theme = extendTheme({ colors });
export default theme;
