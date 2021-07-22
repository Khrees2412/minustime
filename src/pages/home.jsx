import { Box, Flex, Text, Center, Link } from "@chakra-ui/react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Nav />
			<Box>
				<Center>
					<Flex
						direction="column"
						justifyContent="center"
						w={["80%", "initial"]}
						h="100%"
						mx="auto"
						my="10"
					>
						<Text
							textAlign="center"
							fontSize={["5xl", "7xl"]}
							fontWeight="bold"
						>
							Create The Coolest Countdown Timers
						</Text>
						<Center>
							<Link
								href="/signup"
								p="3.5"
								border="1px"
								borderRadius="0.8rem"
								color="white"
								mt="8"
							>
								Try it out
							</Link>
						</Center>
					</Flex>
				</Center>
			</Box>

			<Footer />
		</>
	);
}
