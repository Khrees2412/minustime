import { Box, Button, Text } from "@chakra-ui/react";

const ScrollToTop = () => {
	const scrollUp = () => {
		window.scrollTo(0, 0);
	};

	return (
		<>
			<Box color="brand.light" bgColor="brand.blue" onClick={scrollUp}>
				<Button p="5">
					<Text fontSize="18px" fontStyle="bold">
						Go Up
					</Text>
				</Button>
			</Box>
		</>
	);
};
export default ScrollToTop;
