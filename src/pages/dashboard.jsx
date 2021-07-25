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
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Card from "../components/Card";
import { ShowMessage } from "../utils/toast";
import { useAuth } from "../context/auth";
import { add } from "../db";
import { database } from "../firebaseConfig";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";

export default function Dashboard() {
	const toast = useToast();
	const { currentUser } = useAuth();
	const displayName = currentUser?.displayName;
	const uid = currentUser?.uid;

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
			.where("userID", "==", uid)
			.onSnapshot((snapshot) => {
				const data = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setCard(data.map((d) => d.details.card));
				console.log("cards:", data);
			});
		return () => _unsubscribe;
	}, [uid, card]);

	const addCard = (title, date) => {
		if (card.length < 4) {
			setCard([
				...card,
				{
					id: "",
					title,
					date,
				},
			]);
			ShowMessage(
				"Timer created!",
				"A new timer card has been created for you",
				"success",
				toast
			);
		} else {
			ShowMessage(
				"Could not create timer!",
				"The timer could not be created because you  have reached the limit for timers you can create",
				"error",
				toast
			);
		}
	};
	const handleSubmit = (title, date) => {
		if (title.length < 1 || !date) {
			ShowMessage(
				"Incomplete Form",
				"Please make sure your fill all input",
				"error",
				toast
			);
		} else {
			addCard(title, date);
			add(title, date, uid);
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
		>
			<Flex justifyContent="space-between" mt="16">
				Welcome {displayName ? displayName : "User"}
			</Flex>
			<Text></Text>
			{card.length > 0 &&
				card.map((c, idx) => (
					<Card
						key={idx}
						id={c.id}
						eventDate={c.date ? c.date : "Dec 24 2021, 00:00:00 am"}
						title={c.title}
					/>
				))}

			<Button color="brand.secondary" onClick={onOpen} mt="5">
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
								onClick={() => handleSubmit(title, startDate)}
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
