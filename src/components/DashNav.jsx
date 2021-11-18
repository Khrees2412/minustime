import {
	Text,
	Button,
	Box,
	Flex,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ChangePassword, ChangeEmail } from "./Settings";
import { CreateCountdown } from "../pages/dashboard";

export default function Nav({ displayName, logout, onOpen }) {
	return (
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
			<Button
				bgColor="brand.blue"
				color="white"
				p="3"
				_hover={{ opacity: "0.9" }}
				onClick={() => logout()}
			>
				LOG OUT
			</Button>
		</Flex>
	);
}
