import { Box, Link, VStack } from "@chakra-ui/react";

export default function Footer() {
	return (
		<Box bgColor="white" color="brand.secondary" vh="50vh" p="10">
			<VStack
				spacing={8}
				w="70%"
				m="auto"
				fontSize="2xl"
				fontWeight="semi-bold"
			>
				<Link href="https://khrees.netlify.app">Contact</Link>
				<Link href="/login">Login</Link>
				<Link href="/signup">Start Creating</Link>
			</VStack>
		</Box>
	);
}
