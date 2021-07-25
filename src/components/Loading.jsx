import { Box, Spinner } from "@chakra-ui/react";

export default function Loading() {
	return (
		<Box w="320px">
			<Spinner
				thickness="10px"
				speed="0.65s"
				emptyColor="gray.200"
				color="blue.500"
				size="xl"
			/>
		</Box>
	);
}
