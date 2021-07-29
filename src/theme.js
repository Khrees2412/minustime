import { extendTheme } from "@chakra-ui/react";

const colors = {
	brand: {
		primary: "#000000",
		secondary: "#1db954",
		light: "#1ed760",
		blue: "#1371c3",
		gray: "#b3b3b3",
	},
};
// const fonts {
// 	main: "Fira Sans"
// }
const theme = extendTheme({ colors });
export default theme;
