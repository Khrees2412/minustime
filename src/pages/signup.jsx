import {
	Box,
	Input,
	Link,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import Loading from "../components/Loading";

export default function Signup() {
	const navigate = useNavigate();
	const { signup, currentUser } = useAuth();

	const info = {
		email: "",
		password: "",
	};

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [inputValues, setInputValues] = useState(info);

	useEffect(() => {
		if (currentUser) {
			navigate("/dashboard");
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
			await signup(email, password);
			navigate("/set-name");
		} catch (err) {
			//setError(err)
			setError(err.message);
		}

		setLoading(false);
	};

	return loading ? (
		<Loading />
	) : (
		<Box w={["95%", "50%"]} mx="auto">
			<Box mt="" p="2">
				<FormErrorMessage>{error}</FormErrorMessage>

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
				Already have an account?{" "}
				<Link href="/login" color="yellow.400">
					Log In
				</Link>
			</Box>
		</Box>
	);
}
