import { Route, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

export default function PrivateRoute({ component: Component, ...rest }) {
	const { currentUser } = useAuth();
	const navigate = useNavigate()

	return (
		<Route
			{...rest}
			render={(props) => {
				return currentUser ? (
					<Component {...props} />
				) : (
					navigate("/login")
				);
			}}
		></Route>
	);
}
