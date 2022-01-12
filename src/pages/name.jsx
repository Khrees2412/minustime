import { Box, Input, FormControl, FormLabel, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

export default function Name() {
	const [name, setName] = useState("");
	const { currentUser } = useAuth();
	const navigate = useNavigate();

	const handleChange = (e) => {
		setName(e.target.value);
	};
	const handleSubmit = async (e) => {
		if (!name) return;
		// currentUser &&
		await currentUser.updateProfile({
			displayName: name,
		});
		setTimeout(() => {
			navigate("/dashboard");
		}, 3000);
	};
	return (
		<Box as="form" onSubmit={handleSubmit} w="70%" m="auto" p="2">
			<FormControl mt="20">
				<FormLabel>Please enter a name</FormLabel>
			</FormControl>
			<Input
				placeholder="What should we call you?"
				p="6"
				fontSize="lg"
				value={name}
				onChange={handleChange}
				mb="2"
			/>
			<Button color="brand.secondary" onClick={handleSubmit}>
				Continue
			</Button>
		</Box>
	);
}
