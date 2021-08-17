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
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useToast,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import Loading from "../components/Loading";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { showMessage } from "../utils/toast";
import { useAuth } from "../context/auth";
import { useDb } from "../context/db";
import { database } from "../firebaseConfig";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";

export default function Dashboard() {
	const toast = useToast();
	const { currentUser, logout } = useAuth();
	const { addCard, deleteCard, loading, error, card } = useDb();

	const displayName = currentUser?.displayName;

	const [startDate, setStartDate] = useState(false);
	const [title, setTitle] = useState("");

	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleChange = (e) => {
		setTitle(e.target.value);
	};

	const add = (title, date) => {
		if (card.length < 6) {
			addCard(title, date, userID);
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

const Nav = ({ displayName, logout }) => (
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
