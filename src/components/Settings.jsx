import {
	Button,
	Box,
	Input,
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
import { showMessage } from "../utils/toast";
// import Loading from "./Loading";
import { useState } from "react";
import { useAuth } from "../context/auth";

export function ChangePassword() {
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
			<Button onClick={onOpen}>Change Password</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader mb="3">
						To change your password simply enter the new password
						below
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl id="" mb="3">
							<FormLabel>Password</FormLabel>
							<Input
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

export function ChangeEmail() {
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
			<Button onClick={onOpen}>Change Email</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader mb="3">
						To change your email simply enter the new email below
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl id="" mb="3">
							<FormLabel>email</FormLabel>
							<Input
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
