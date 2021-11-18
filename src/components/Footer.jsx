import { Box, Link, Flex } from "@chakra-ui/react";

export default function Footer() {
	return (
		<Box
			color="brand.primary"
			bgColor="brand.secondary"
			h={["10vh", "20vh"]}
			p={["2", "4"]}
			w="100%"
		>
			<Flex
				justifyContent="space-between"
				mx={["10", "20"]}
				alignItems="center"
				fontSize={["lg", "2xl"]}
				fontWeight="semi-bold"
			>
				<Link href="/login">Login</Link>
				<Link href="/signup">Start Creating</Link>
				<Link href="https://khrees.netlify.app">Contact</Link>
			</Flex>
		</Box>
	);
}
