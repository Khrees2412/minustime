import { Box, Flex, Link, Heading, Image, Text } from "@chakra-ui/react";
import Typed from "react-typed";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import season from "../assets/season.svg";
import event from "../assets/event.svg";
import schedule from "../assets/schedule.svg";

export default function Home() {
	return (
		<>
			<Nav />
			<Flex
				direction={["column", "row"]}
				justifyContent="space-around"
				w={["80%", "initial"]}
				mx="auto"
				my="10"
				h={["70vh", "500px"]}
				bgColor="brand.primary"
				color="brand.light"
			>
				<Box>
					<Box mt="10">
						<Heading fontSize={["4xl", "6xl"]} mb={["2", "5"]}>
							How long until
						</Heading>
						<Heading
							fontSize={["5xl", "6xl"]}
							bgGradient="linear(to-r, pink.600, purple.600)"
							bgClip="text"
						>
							<Typed
								strings={[
									"my birthday?",
									"christmas?",
									"the holiday?",
								]}
								typeSpeed={30}
								loop
							></Typed>
						</Heading>
					</Box>
					<Box mt={["10", "20"]} mb="10">
						<Link
							href="/signup"
							p="3"
							border="2px"
							borderColor="brand.light"
							borderRadius="0.8rem"
							color="brand.light"
							fontWeight="bold"
						>
							Try it out
						</Link>
					</Box>
				</Box>

				<Image
					src={event}
					alt="event"
					w="350px"
					h={["320px", "450px"]}
				/>
			</Flex>

			<Flex
				direction={["column", "row"]}
				justifyContent="space-around"
				w={["100%", "initial"]}
				mx="auto"
				my="10"
				h={["70vh", "500px"]}
				bgColor="brand.light"
				color="#121212"
				borderBottom="2px solid purple"
			>
				<Box fontWeight="bold" mt="15" p="5">
					<Heading fontSize={["4xl", "5xl"]} textAlign="center">
						Create the coolest
					</Heading>
					<Heading
						fontSize={["5xl", "6xl"]}
						bgGradient="linear(to-r, pink.500, brand.blue)"
						bgClip="text"
						textAlign="center"
					>
						Countdown Timers
					</Heading>
				</Box>
				<Image
					src={season}
					alt="clock"
					w="350px"
					h={["320px", "450px"]}
					p="5"
					mb="10"
				/>
			</Flex>

			<Flex
				direction={["column", "row"]}
				justifyContent="space-around"
				w={["80%", "initial"]}
				mx="auto"
				my="10"
				h={["60vh", "500px"]}
			>
				<Box mt="20">
					<Heading fontSize={["4xl", "5xl"]} mb="5">
						Never lose track of your most
						<Text
							bgGradient="linear(to-r, pink.600, purple.600)"
							bgClip="text"
						>
							important events
						</Text>
					</Heading>
				</Box>

				<Image
					src={schedule}
					alt="scheduler"
					w="350px"
					h={["320px", "450px"]}
					p="5"
					my="10"
				/>
			</Flex>
			<Footer />
		</>
	);
}
