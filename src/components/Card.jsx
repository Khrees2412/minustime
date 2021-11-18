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
			<Text
				color="blue.600"
				w="100%"
				fontWeight="bold"
				fontSize="4xl"
				textAlign="center"
			>
				{title}
			</Text>

			<Timer eventDate={eventDate} />

			<Button
				mt="2"
				color="white"
				bgColor="red.500"
				_hover={{ opacity: "0.95" }}
				onClick={() => deleteUserCard(id)}
			>
				Delete
			</Button>
		</Box>
	);
}
