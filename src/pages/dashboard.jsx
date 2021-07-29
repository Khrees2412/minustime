import {
	Box,
	Text,
	Flex,
	Button,
	Input,
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
import { add, deleteCard } from "../db";
import { database } from "../firebaseConfig";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";

export default function Dashboard() {
	const toast = useToast();
	const { currentUser, logout } = useAuth();
	const displayName = currentUser?.displayName;
	const userID = currentUser?.uid;

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const [startDate, setStartDate] = useState(false);
	const [title, setTitle] = useState("");
	const [card, setCard] = useState([]);

	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleChange = (e) => {
		setTitle(e.target.value);
	};

	useEffect(() => {
		const _unsubscribe = database
			.where("userID", "==", userID)
			.onSnapshot((snapshot) => {
				const data = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setCard(data);
			});
		return () => _unsubscribe;
	}, [userID, card]);

	const addCard = (title, date) => {
		if (card.length < 4) {
			// const err =
			add(title, date, userID);
			setLoading(false);
			// if (err) console.error;
			setTimeout(() => {
				showMessage(
					"Timer created!",
					"A new timer card has been created ",
					"success",
					toast
				);
			}, 1000);
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
		try {
			setLoading(true);
			deleteCard(id);
		} catch (err) {
			console.error(err);
		}

		setLoading(false);
		setTimeout(() => {
			showMessage(
				"Timer deleted!",
				"The timer card has been deleted",
				"success",
				toast
			);
		}, 1000);
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
			addCard(title, date);
			onClose();
		}

		setStartDate("");
		setTitle("");
	};

	return (
		<Box
			w="70%"
			d="flex"
			alignItems="center"
			justifyContent="center"
			flexDirection="column"
			bgColor="brand.primary"
		>
			<Flex justifyContent="space-between" direction="column" mt="16">
				<Text>
					Welcome
					<Text
						ml="3"
						color="pink.600"
						fontSize="lg"
						fontWeight="bold"
					>
						{displayName ? displayName : "User"}
					</Text>
				</Text>
			</Flex>
			<Text></Text>
			{!loading ? (
				card.length > 0 &&
				card.map((c, idx) => (
					<Card
						key={idx}
						id={c.id}
						eventDate={c.date ? c.date : "Dec 24 2021, 00:00:00 am"}
						title={c.title}
						deleteUserCard={deleteUserCard}
					/>
				))
			) : (
				<Loading />
			)}
			<Button color="brand.btn" onClick={onOpen} mt="5">
				Create a Countdown!
			</Button>
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
									placeholderText="Pick your date "
									dateFormat="MMMM d, yyyy h:mm aa"
									className="datepicker"
								/>
							</FormControl>
						</ModalBody>

						<ModalFooter>
							<Button
								onClick={() => {
									setLoading(true);
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
			<Button
				color="brand.secondary"
				mt="10"
				hover={{ color: "brand.secondary" }}
				onClick={() => logout()}
			>
				LOG OUT
			</Button>
		</Box>
	);
}
