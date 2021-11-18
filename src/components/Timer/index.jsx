import { useEffect, useState } from "react";
import { Text, Box, VStack, HStack } from "@chakra-ui/react";
import "./Timer.css";

export default function Timer({ eventDate }) {
	const [currentTime, setCurrentTime] = useState({
		day: "",
		hours: "",
		mins: "",
		secs: "",
	});

	useEffect(() => {
		// Update the count down every 1 second
		const x = setInterval(() => {
			// Get today's date and time
			// const now = new Date().getTime();

			// Find the distance between now and the count down date
			const distance =
				+new Date(eventDate.toDate().toLocaleString()) - +new Date();

			// Time calculations for days, hours, minutes and seconds
			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor(
				(distance % (1000 * 60 * 60)) / (1000 * 60)
			);
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			setCurrentTime({
				...currentTime,
				day: days,
				hrs: hours,
				mins: minutes,
				secs: seconds,
			});

			if (distance <= 0) {
				clearInterval(x);
				setCurrentTime("Expired");
			}
		}, 1000);
	});

	const { day, hrs, mins, secs } = currentTime;
	const styles = {
		color: "purple",
		fontWeight: 400,
	};

	return currentTime !== "Expired" ? (
		<VStack className="time-display" spacing="8" color="brand.primary">
			<HStack spacing="5">
				<Box className="day">
					<Text fontSize={["2xl", "4xl"]} fontWeight="bold">
						{day} <span style={styles}>d</span>
					</Text>
				</Box>
				<Box className="hrs">
					<Text fontSize={["2xl", "4xl"]} fontWeight="bold">
						{hrs} <span style={styles}>h</span>
					</Text>
				</Box>
			</HStack>
			<HStack spacing="5">
				<Box className="mins">
					<Text fontSize={["2xl", "4xl"]} fontWeight="bold">
						{mins} <span style={styles}>m</span>
					</Text>
				</Box>
				<Box className="secs">
					<Text fontSize={["2xl", "4xl"]} fontWeight="bold">
						{secs} <span style={styles}>s</span>
					</Text>
				</Box>
			</HStack>
		</VStack>
	) : (
		<TimeUp />
	);
}

const TimeUp = () => {
	return (
		<>
			<Box>Time Elapsed</Box>
		</>
	);
};
