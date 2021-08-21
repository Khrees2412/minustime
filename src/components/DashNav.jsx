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

export default function Nav({ displayName, logout }) {
	return (
		<Flex
			justifyContent="space-between"
			alignItems="center"
			bgColor="#121212"
			color="brand.secondary"
			w="100%"
			p="6"
		>
			{displayName && (
				<Box>
					<Text
						ml="2"
						color="pink.600"
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
			<Button
				bgColor="brand.blue"
				color="white"
				p="3"
				hover={{ color: "brand.secondary" }}
				onClick={() => logout()}
			>
				LOG OUT
			</Button>
		</Flex>
	);
}
