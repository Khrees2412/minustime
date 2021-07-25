import { Link } from "react-router-dom";
import { Box, Text, Flex } from "@chakra-ui/react";
import Timer from "../utils/timer";

export default function Card({ eventDate, title }) {
	return (
		<Box>
			<Text color="orange.500" fontWeight="bold">
				{title}
			</Text>
			<Timer eventDate={eventDate} />
		</Box>
	);
}
