import {
	Text,
	Button,
	Box,
	Flex,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
	Textarea,
	FormControl,
	FormLabel,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useToast,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { showMessage } from "../utils/toast";
import DatePicker from "react-datepicker";
import Loading from "../components/Loading";
import { useState } from "react";
import { useAuth } from "../context/auth";
import { useDb } from "../context/db";

export default function Nav({ displayName, logout }) {
	const { onOpen } = useDisclosure();
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
			<Box>
				<Menu>
					<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
						Account Settings
					</MenuButton>
					<MenuList>
						{/* <MenuItem onClick={POpen}>Change Password</MenuItem>
    <MenuItem onClick={EOpen}>Change Email</MenuItem> */}
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

function ChangePassword() {
	const toast = useToast();
	const { updatePassword } = useAuth();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [password, setPassword] = useState("");

	const handleChange = (e) => {
		setPassword(e.target.value);
	};
	const handleSubmit = () => {
		updatePassword(password);
		setTimeout(() => {
			showMessage("Password changed successfully", "", "success", toast);
		}, 2000);
	};
	return (
		<Box>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						To change your password simply enter the new password
						below
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl id="" mb="3">
							<FormLabel>Password</FormLabel>
							<Textarea
								name="passwordchange"
								value={password}
								onChange={handleChange}
								p="2"
								fontSize="md"
							/>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button
							onClick={() => {
								handleSubmit(password);
							}}
							w="100%"
							p="6"
							color="white"
							bgColor="brand.secondary"
							_hover={{ bgColor: "brand.secondary" }}
						>
							Submit
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
}

function ChangeEmail() {
	const toast = useToast();
	const { updateEmail } = useAuth();

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [email, setEmail] = useState("");

	const handleChange = (e) => {
		setEmail(e.target.value);
	};
	const handleSubmit = () => {
		updateEmail(email);
		setTimeout(() => {
			showMessage("Email changed successfully", "", "success", toast);
		}, 2000);
	};
	return (
		<Box>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						To change your email simply enter the new email below
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl id="" mb="3">
							<FormLabel>email</FormLabel>
							<Textarea
								name="emailchange"
								value={email}
								onChange={handleChange}
								p="2"
								fontSize="md"
							/>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button
							onClick={() => {
								handleSubmit(email);
							}}
							w="100%"
							p="6"
							color="white"
							bgColor="brand.secondary"
							_hover={{ bgColor: "brand.secondary" }}
						>
							Submit
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
}
