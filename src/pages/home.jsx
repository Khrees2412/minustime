import { Box, Flex, Link, Heading, Image } from "@chakra-ui/react";
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
				h="500px"
				bgColor="brand.primary"
				color="brand.light"
			>
				<Box>
					<Box mt="10">
						<Heading fontSize={["4xl", "6xl"]}>
							How long until
						</Heading>
						<Heading
							fontSize={["5xl", "7xl"]}
							bgGradient="linear(to-r, pink.600, purple.600)"
							bgClip="text"
						>
							<Typed
								strings={[
									"my birthday?",
									"Christmas?",
									"my graduation?",
									"the New Year?",
								]}
								typeSpeed={40}
								loop
							></Typed>
						</Heading>
					</Box>
					<Box mt="20">
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

				<Image src={event} alt="event" w="350px" h="450px" />
			</Flex>
			<Flex
				direction={["column", "row"]}
				justifyContent="space-around"
				w={["80%", "initial"]}
				mx="auto"
				h="500px"
				bgColor="brand.light"
				color="#121212"
				p="5"
			>
				<Box fontWeight="bold" mt="20">
					<Heading fontSize={["5xl", "7xl"]}>
						Create the coolest
					</Heading>
					<Heading
						fontSize={["5xl", "7xl"]}
						bgGradient="linear(to-r, pink.500, brand.blue)"
						bgClip="text"
					>
						Countdown Timers
					</Heading>
				</Box>
				<Image src={season} alt="clock" w="350px" h="450px" />
			</Flex>
			<Flex
				direction={["column", "row"]}
				justifyContent="space-around"
				w={["80%", "initial"]}
				mx="auto"
				h="500px"
				p="5"
			>
				<Box mt="20">
					<Heading fontSize={["4xl", "6xl"]}>
						Never lose track of your most
					</Heading>
					<Heading
						fontSize={["5xl", "7xl"]}
						bgGradient="linear(to-r, pink.600, purple.600)"
						bgClip="text"
					>
						important events
					</Heading>
				</Box>

				<Image src={schedule} alt="schedule" w="350px" h="450px" />
			</Flex>

			<Footer />
		</>
	);
}
