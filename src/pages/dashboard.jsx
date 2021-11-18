import {
	Box,
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
import ScrollToTop from "../components/ScrollToTop";
import Card from "../components/Card";
import DashNav from "../components/DashNav";
import { useState, useEffect } from "react";
import { showMessage } from "../utils/toast";
import { useAuth } from "../context/auth";
import { useDb } from "../context/db";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";

export default function Dashboard() {
	const toast = useToast();
	const { currentUser, logout } = useAuth();
	const { addCard, deleteCard, loading, card, uid } = useDb();
	// error,

	const displayName = currentUser?.displayName;

	// const [localCard, setLocalCard] = useState([])
	const [startDate, setStartDate] = useState(false);
	const [title, setTitle] = useState("");
	const [showScroll, setShowScroll] = useState(false);

	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleChange = (e) => {
		setTitle(e.target.value);
	};

	useEffect(() => {
		const halfWindowHeight = window.innerHeight / 2;
		if (window.innerHeight === halfWindowHeight) {
			setShowScroll(true);
		}
	}, []);

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
			<DashNav
				displayName={displayName}
				logout={logout}
				onOpen={onOpen}
			/>
			<Box bgColor="brand.light">
				<Divider />
			</Box>

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
											: "Dec 24 2060, 00:00:00 am"
									}
									title={c.title}
									deleteUserCard={deleteUserCard}
								/>
							))
						)
					}
				</Grid>
			</Box>
			<Center>{showScroll && <ScrollToTop />}</Center>

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

export const CreateCountdown = ({ onOpen }) => {
	return (
		<Box>
			<Button color="brand.btn" onClick={onOpen}>
				Create a Countdown!
			</Button>
		</Box>
	);
};
