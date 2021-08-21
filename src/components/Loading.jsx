import { Flex, Spinner } from "@chakra-ui/react";

export default function Loading() {
	return (
		<Flex w="320px" m="auto" alignItems="center">
			<Spinner
				thickness="10px"
				speed="0.65s"
				emptyColor="gray.200"
				color="blue.500"
				size="xl"
			/>
		</Flex>
	);
}
