import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Name from "./pages/name";
import Dashboard from "./pages/dashboard";
import PrivateRoute from "./utils/privateRoute";
import { AuthProvider } from "./context/auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Box } from "@chakra-ui/react";

function App() {
	return (
		<Router>
			<AuthProvider>
				<Box bgColor="brand.primary" h="100vh" color="brand.secondary">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/signup" component={Signup} />
						<Route path="/login" component={Login} />
						<Route path="/set-name" component={Name} />
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
