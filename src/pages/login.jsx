import {
	Box,
	Button,
	Input,
	Link,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import { useHistory } from "react-router-dom";

export default function Login() {
	const history = useHistory();
	const { login, currentUser } = useAuth();

	const info = {
		email: "",
		password: "",
	};

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [inputValues, setInputValues] = useState(info);

	useEffect(() => {
		if (currentUser) {
			history.push("/dashboard");
		}
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputValues({ ...inputValues, [name]: value });
	};

	const { email, password } = inputValues;

	const handleSubmit = async (e) => {
		e.preventDefault();

		setInputValues({ email: "", password: "" });

		try {
			setError("");
			setLoading(true);
			await login(email, password);
			history.push("/dashboard");
		} catch (err) {
			//setError(err)
			setError("An Error Occured. \n Failed to login \n Try Again");
		}

		setLoading(false);
	};

	return (
		<Box w={["95%", "50%"]} mx="auto">
			<Box mt="" p="2">
				<FormControl id="email" mt="20" mb="3">
					<FormLabel>Email address</FormLabel>
					<Input
						type="email"
						name="email"
						value={email}
						onChange={handleChange}
						p="6"
						fontSize="lg"
					/>
					<FormHelperText>
						We'll never share your email.
					</FormHelperText>
				</FormControl>
				<FormControl id="password" mb="3">
					<FormLabel>Password</FormLabel>
					<Input
						type="password"
						name="password"
						value={password}
						onChange={handleChange}
						p="6"
						fontSize="lg"
					/>
				</FormControl>
				<Button
					onClick={handleSubmit}
					w="100%"
					p="6"
					color="brand.secondary"
				>
					Submit
				</Button>
			</Box>

			<Box ml="2" textAlign="center">
				Need an account?{" "}
				<Link href="/signup" color="yellow.400">
					Sign Up
				</Link>
			</Box>
		</Box>
	);
}
