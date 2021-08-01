import { Box, Text, Button } from "@chakra-ui/react";
import Timer from "./Timer";

export default function Card({ eventDate, title, deleteUserCard, id }) {
	return (
		<Box
			p="4"
			borderRadius="4"
			mb="3"
			bgColor="brand.light"
			w={["260px", "400px"]}
			mx="auto"
		>
			<Text color="orange.500" fontWeight="bold" fontSize="md">
				{title}
			</Text>

			<Timer eventDate={eventDate} />

			<Button
				mt="2"
				color="red.600"
				bgColor="white"
				_hover={{ color: "white", bgColor: "red.500" }}
				onClick={() => deleteUserCard(id)}
			>
				Delete card
			</Button>
		</Box>
	);
}
