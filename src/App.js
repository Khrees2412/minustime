import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import PrivateRoute from "./components/privateRoute";
import { AuthProvider } from "./authContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Box } from "@chakra-ui/react";

function App() {
	return (
		<Router>
			<AuthProvider>
				<Box bgColor="brand.secondary" h="100vh" color="white">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/signup" component={Signup} />
						<Route path="/login" component={Login} />
						<PrivateRoute
							exact
							path="/dashboard"
							component={Dashboard}
						/>
					</Switch>
				</Box>
			</AuthProvider>
		</Router>
	);
}

export default App;
