import { Link } from "react-router-dom";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import Timer from "../utils/timer";

export default function Card({ eventDate, title, deleteUserCard, id }) {
	return (
		<>
			<Box p="6" border="white" borderRadius="1" mb="3">
				<Text color="orange.500" fontWeight="bold">
					{title}
				</Text>
				<Timer eventDate={eventDate} />
				<Button
					bgColor="red.600"
					color="white"
					hover={{ color: "brand.secondary", bgColor: "red.500" }}
					onClick={() => deleteUserCard(id)}
				>
					Delete card
				</Button>
			</Box>
		</>
	);
}
