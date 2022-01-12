import {
	Text,
	Button,
	Box,
	Flex,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	CloseButton,

} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ChangePassword, ChangeEmail } from "./Settings";
import { CreateCountdown } from "../pages/dashboard";
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

// export default function Nav() {
// 	return (
// 		<Flex
// 			justifyContent="space-between"
// 			alignItems="center"
// 			bgColor="brand.primary"
// 			color="#000"
// 			w="100%"
// 			p="6"
// 		>
// 			{displayName && (
// 				<Box>
// 					<Text
// 						ml="2"
// 						color="pink.300"
// 						textTransform="uppercase"
// 						fontSize="lg"
// 						fontWeight="bold"
// 					>
// 						Welcome {displayName}
// 					</Text>
// 				</Box>
// 			)}
// 			<Box bgColor="brand.primary">
// 				<Menu>
// 					<MenuButton as={Button}>
// 						Account Settings <ChevronDownIcon />
// 					</MenuButton>
// 					<MenuList>
// 						<MenuItem>
// 							<ChangePassword />
// 						</MenuItem>
// 						<MenuItem>
// 							<ChangeEmail />
// 						</MenuItem>
// 					</MenuList>
// 				</Menu>
// 			</Box>
// 			<Box>
// 				<CreateCountdown onOpen={onOpen} />
// 			</Box>
// 			<Button
// 				bgColor="brand.blue"
// 				color="white"
// 				p="3"
// 				_hover={{ opacity: "0.9" }}
// 				onClick={() => logout()}
// 			>
// 				LOG OUT
// 			</Button>
// 		</Flex>
// 	);
// }





const Nav = ({ displayName, logout, onOpen }) => {
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
		<Flex
			justifyContent="space-between"
			alignItems="center"
			bgColor="brand.primary"
			color="#000"
			w="100%"
			p="6"
		>
			{displayName && (
				<Box>
					<Text
						ml="2"
						color="pink.300"
						textTransform="uppercase"
						fontSize="lg"
						fontWeight="bold"
					>
						Welcome {displayName}
					</Text>
				</Box>
			)}
		
			
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
					<Box bgColor="brand.primary">
				<Menu>
					<MenuButton as={Button}>
						Account Settings <ChevronDownIcon />
					</MenuButton>
					<MenuList>
						<MenuItem>
							<ChangePassword />
						</MenuItem>
						<MenuItem>
							<ChangeEmail />
						</MenuItem>
					</MenuList>
				</Menu>
			</Box>
			<Box>
				<CreateCountdown onOpen={onOpen} />
			</Box>

					<MenuItems isLast>
					<Button
				bgColor="brand.blue"
				color="white"
				p="3"
				_hover={{ opacity: "0.9" }}
				onClick={() => logout()}
			>
				LOG OUT
			</Button>
					</MenuItems>
				</Flex>
			</Box>
		</Flex>
	);
};

export default Nav;
