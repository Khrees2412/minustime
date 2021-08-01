import {
	Box,
	Flex,
	Text,
	Button,
	CloseButton,
	Divider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
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
			<Link to={to}>{children}</Link>
		</Text>
	);
};

const Nav = (props) => {
	const [show, setShow] = useState(false);
	const toggleMenu = () => setShow(!show);

	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			w="100%"
			mb={5}
			p={3}
			bg="brand.primary"
			color="brand.secondary"
			{...props}
		>
			<Flex align="center" fontWeight="bold" fontSize="3xl">
				MinusTime
			</Flex>
			<Flex align="center">
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
						to="/login"
					>
						Login
					</MenuItems>

					<MenuItems to="/signup" isLast>
						<Button
							size="sm"
							rounded="md"
							color="brand.secondary"
							bgColor="#121212"
							_hover={{
								bgColor: "brand.secondary",
								color: "brand.primary",
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
