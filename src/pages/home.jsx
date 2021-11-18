import { Box, Flex, Link, Heading, Image, Text, Stack } from "@chakra-ui/react";
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
				alignItems={["center", "intial"]}
				w={["90%", "initial"]}
				mx="auto"
				my="10"
				h={["400px", "500px"]}
				bgColor="brand.primary"
				color="brand.light"
			>
				<Box>
					<Box mt="10">
						<Heading fontSize={["2xl", "6xl"]} mb={["2", "5"]}>
							How long until
						</Heading>
						<Heading
							fontSize={["2xl", "6xl"]}
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
							border="8px"
							borderColor="brand.light"
							borderRadius="0.8rem"
							bgColor="brand.light"
							color="brand.primary"
							fontWeight="bold"
						>
							Try it out
						</Link>
					</Box>
				</Box>

				<Box w="350px">
					<Image src={event} alt="event" />
				</Box>
			</Flex>
			{/* Second Container*/}
			<Stack
				direction={["column", "row"]}
				justifyContent="space-around"
				w={["100%", "initial"]}
				mx="auto"
				mt="20"
				p={["initial", "10"]}
				h={["initial", "80vh"]}
				bgColor="brand.light"
				color="#121212"
			>
				<Box
					w="350px"
					// h={["initial", "450px"]}
					px="5"
					py="3"
					mt={["7", "15"]}
					mb={["5", "10"]}
				>
					<Image src={season} alt="clock" />
				</Box>

				<Box fontWeight="bold" mt={["initial", "20"]} mb={["10"]} p="5">
					<Box mb={["8", "initial"]}>
						<Heading fontSize={["3xl", "5xl"]} textAlign="center">
							Create the coolest
						</Heading>
						<Heading
							fontSize={["4xl", "6xl"]}
							bgGradient="linear(to-r, pink.500, brand.blue)"
							bgClip="text"
							textAlign="center"
						>
							Countdown Timers
						</Heading>
					</Box>
					<Text align={["center", "initial"]}>
						MinusTime allows you to create really beautiful timer
						cards. Watch the time countdown in real-time.
					</Text>
				</Box>
			</Stack>
			<Stack
				direction={["column", "row"]}
				justifyContent="space-around"
				w={["100%", "initial"]}
				mx="auto"
				my="10"
				h={["initial", "500px"]}
			>
				<Box mt={["5", "20"]}>
					<Heading
						fontSize={["3xl", "5xl"]}
						mb="5"
						textAlign={["center", "initial"]}
					>
						Never lose track of your most
						<Text
							fontSize={["4xl", "6xl"]}
							bgGradient="linear(to-r, pink.600, purple.600)"
							bgClip="text"
						>
							important events
						</Text>
					</Heading>
				</Box>

				<Box w="350px" h={["320px", "450px"]} p="5" my="10">
					<Image src={schedule} alt="scheduler" />
				</Box>
			</Stack>

			<Footer />
		</>
	);
}
