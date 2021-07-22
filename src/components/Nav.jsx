import {
	Box,
	Flex,
	Text,
	Button,
	CloseButton,
	Divider,
	useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const MenuItems = (props) => {
	const { children, isLast, to = "/", ...rest } = props;
	return (
		<Text
			mb={{ base: isLast ? 0 : 8, sm: 0 }}
			mr={{ base: 0, sm: isLast ? 0 : 8 }}
			display="block"
			{...rest}
		>
			<Link to={to}>
				<a>{children}</a>
			</Link>
		</Text>
	);
};

const Nav = (props) => {
	const [show, setShow] = useState(false);
	const toggleMenu = () => setShow(!show);

	// const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			w="100%"
			mb={5}
			p={4}
			bg="white"
			color="brand.secondary"
			{...props}
		>
			<Flex align="center" fontWeight="bold" fontSize="3xl">
				MinusTime
			</Flex>
			<Flex align="center">
				{/* <Box
					display={{ base: "block", md: "none" }}
					mr={{ base: "2", lg: "0" }}
					cursor="pointer"
					onClick={toggleColorMode}
				>
					{colorMode === "light" ? (
						<MoonIcon boxSize={6} />
					) : (
						<SunIcon boxSize={8} />
					)} 
				</Box>
*/}
				<Box
					display={{ base: "block", md: "none" }}
					ml="2"
					cursor="pointer"
					onClick={toggleMenu}
				>
					{show ? (
						<CloseButton />
					) : (
						<HamburgerIcon boxSize={8} color="brand.secondary" />
					)}
				</Box>
			</Flex>
			{show && <Divider orientation="horizontal" />}
			<Box
				display={{ base: show ? "block" : "none", md: "block" }}
				flexBasis={{ base: "100%", md: "auto" }}
			>
				<Flex
					align="center"
					justify={[
						"center",
						"space-between",
						"flex-end",
						"flex-end",
					]}
					direction={["column", "row", "row", "row"]}
					pt={[4, 8, 0, 0]}
				>
					{/* <Box
						display={{ base: "none", lg: "block" }}
						mr={{ lg: "4" }}
						cursor="pointer"
						onClick={toggleColorMode}
					>
						{colorMode === "light" ? (
							<MoonIcon boxSize={6} />
						) : (
							<SunIcon boxSize={8} />
						)}
					</Box> */}
					<MenuItems
						_hover={{
							shadow: "outline",
							p: "1",
							borderRadius: "3px",
						}}
						to="/"
					>
						Home
					</MenuItems>
					<MenuItems
						_hover={{
							shadow: "outline",
							p: "1",
							borderRadius: "3px",
						}}
						to="/"
					>
						How It works
					</MenuItems>

					<MenuItems to="/signup" isLast>
						<Button
							size="sm"
							rounded="md"
							color="red.500"
							bg="white"
							_hover={{
								bg: [
									"primary.100",
									"primary.100",
									"primary.600",
									"primary.600",
								],
							}}
						>
							Create Account
						</Button>
					</MenuItems>
				</Flex>
			</Box>
		</Flex>
	);
};

export default Nav;
