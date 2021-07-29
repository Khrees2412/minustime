import { Box, Link, Flex } from "@chakra-ui/react";

export default function Footer() {
	return (
		<Box color="brand.primary" bgColor="brand.secondary" h="20vh" p="4">
			<Flex
				direction={["column", "row"]}
				justifyContent="space-between"
				w="50%"
				m="auto"
				alignItems="center"
				fontSize="2xl"
				fontWeight="semi-bold"
			>
				<Link href="https://khrees.netlify.app">Contact</Link>
				<Link href="/login">Login</Link>
				<Link href="/signup">Start Creating</Link>
			</Flex>
		</Box>
	);
}
