import { Spinner, Box } from "@chakra-ui/react";

export default function Loading() {
	return (
		<Box w="320px" position="absolute" top="50%" left="50%">
			<Spinner
				thickness="10px"
				speed="0.65s"
				emptyColor="gray.200"
				color="blue.600"
				size="xl"
			/>
		</Box>
	);
}
