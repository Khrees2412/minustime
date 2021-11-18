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

	return currentTime !== "Expired" ? (
		<VStack className="time-display" spacing="8" color="brand.primary">
			<HStack spacing="5">
				<Box className="day">
					<Text fontSize={["2xl", "4xl"]} fontWeight="bold">
						{day} <span style={{ color: "purple" }}>d</span>
					</Text>
					<Text fontSize={["xl", "2xl"]} fontWeight="light">
						{/* {day === 1 ? "day" : "days"} */}
					</Text>
				</Box>
				<Box className="hrs">
					<Text fontSize={["2xl", "4xl"]} fontWeight="bold">
						{hrs} <span style={{ color: "purple" }}>h</span>
					</Text>
					<Text fontSize={["xl", "2xl"]} fontWeight="light">
						{/* {hrs === 1 ? "hour" : "hours"} */}
					</Text>
				</Box>
			</HStack>
			<HStack spacing="5">
				<Box className="mins">
					<Text fontSize={["2xl", "4xl"]} fontWeight="bold">
						{mins} <span style={{ color: "purple" }}>m</span>
					</Text>
					<Text fontSize={["xl", "2xl"]} fontWeight="light">
						{/* {mins === 1 ? "minute" : "minutes"} */}
					</Text>
				</Box>
				<Box className="secs">
					<Text fontSize={["2xl", "4xl"]} fontWeight="bold">
						{secs} <span style={{ color: "purple" }}>s</span>
					</Text>
					<Text fontSize={["xl", "2xl"]} fontWeight="light">
						{/* {secs === 1 ? "second" : "seconds"} */}
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
// {!eventDate ? "No date set" : eventDate}
