import {
	Box,
	Text,
	Flex,
	Button,
	Center,
	Divider,
	Grid,
	Textarea,
	FormControl,
	FormLabel,
	useDisclosure,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
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
import DatePicker from "react-datepicker";
import Loading from "../components/Loading";
import Card from "../components/Card";
import { useState } from "react";
import { showMessage } from "../utils/toast";
import { useAuth } from "../context/auth";
import { useDb } from "../context/db";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";

export default function Dashboard() {
	const toast = useToast();
	const { currentUser, logout } = useAuth();
	const { addCard, deleteCard, loading, error, card, uid } = useDb();

	const displayName = currentUser?.displayName;

	const [startDate, setStartDate] = useState(false);
	const [title, setTitle] = useState("");

	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleChange = (e) => {
		setTitle(e.target.value);
	};

	const add = (title, date) => {
		if (card.length < 6) {
			addCard(title, date, uid);
			setTimeout(() => {
				showMessage(
					"Timer created!",
					"A new timer card has been created ",
					"success",
					toast
				);
			}, 2000);
		} else {
			showMessage(
				"Could not create timer!",
				"The timer could not be created because you  have reached the limit for timers you can create",
				"error",
				toast
			);
		}
	};

	const deleteUserCard = (id) => {
		deleteCard(id);
		setTimeout(() => {
			showMessage(
				"Timer deleted!",
				"The timer card has been deleted",
				"success",
				toast
			);
		}, 2000);
	};

	const handleSubmit = (title, date) => {
		if (title.length < 1 || !date) {
			showMessage(
				"Incomplete Form",
				"Please make sure your fill all input",
				"error",
				toast
			);
		} else {
			add(title, date);
			onClose();
		}

		setStartDate("");
		setTitle("");
	};

	return (
		<Box vh="100%" bgColor="brand.primary">
			<Nav displayName={displayName} logout={logout} />
			<Box bgColor="brand.light">
				<Divider />
			</Box>
			<Center mt="5" mb="8">
				<Button color="brand.btn" onClick={onOpen} mt="5">
					Create a Countdown!
				</Button>
			</Center>
			<Box mt="20" w="70%" mx="auto">
				<Grid
					templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
					gap={[2, 4]}
				>
					{
						loading ? (
							<Loading />
						) : (
							card.length > 0 &&
							card.map((c, idx) => (
								<Card
									key={idx}
									id={c.id}
									eventDate={
										c.date
											? c.date
											: "Dec 24 2021, 00:00:00 am"
									}
									title={c.title}
									deleteUserCard={deleteUserCard}
								/>
							))
						)
						// : "You don't have any timer cards yet.. Start creating!"
					}
				</Grid>
			</Box>
			<Center>
				<Button color="brand.btn" onClick={onOpen} mt="5" mb="10">
					{card.length === 6 ? "" : "Add another timer card"}
				</Button>
			</Center>

			<Box>
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>
							Enter the details for the countdown
						</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<FormControl id="" mb="3">
								<FormLabel>
									What event are you looking forward to?
								</FormLabel>
								<Textarea
									name="title"
									value={title}
									onChange={handleChange}
									p="2"
									fontSize="md"
								/>
							</FormControl>
							<FormControl mb="3" fontSize="md">
								<FormLabel>
									What date are you counting down to?
								</FormLabel>
								<DatePicker
									selected={startDate}
									onChange={(date) => {
										setStartDate(date);
									}}
									placeholderText="Pick a date "
									dateFormat="MMMM d, yyyy h:mm aa"
									className="datepicker"
								/>
							</FormControl>
						</ModalBody>

						<ModalFooter>
							<Button
								onClick={() => {
									handleSubmit(title, startDate);
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
		</Box>
	);
}

function Nav({ displayName, logout }) {
	const { _, onOpen, _ } = useDisclosure();

	<Flex
		justifyContent="space-between"
		alignItems="center"
		bgColor="#121212"
		color="brand.secondary"
		w="100%"
		p="6"
	>
		<Box>
			<Text
				ml="2"
				color="pink.600"
				textTransform="uppercase"
				fontSize="lg"
				fontWeight="bold"
			>
				Welcome {displayName ? displayName : "User"}
			</Text>
		</Box>
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
	</Flex>;
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
