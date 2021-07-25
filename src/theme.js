import { extendTheme } from "@chakra-ui/react";

const colors = {
	brand: {
		primary: "#1b2432",
		light: "#007EA7",
		secondary: " #003459",
		btn: "#121420",
	},
};
// const fonts {
// 	main: "Fira Sans"
// }
const theme = extendTheme({ colors });
export default theme;
