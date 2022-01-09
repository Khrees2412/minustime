import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Name from "./pages/name";
import Dashboard from "./pages/dashboard";
import PrivateRoute from "./utils/privateRoute";
import { AuthProvider } from "./context/auth";
import { DbProvider } from "./context/db";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

function App() {
	return (
		<Routes>
			<AuthProvider>
				<DbProvider>
					<Box
						bgColor="brand.primary"
						h="100vh"
						color="brand.secondary"
					>
						<Routes>
							<Route exact path="/" element={Home} />
							<Route path="/signup" element={Signup} />
							<Route path="/login" element={Login} />
							<Route path="/set-name" element={Name} />
							<PrivateRoute
								exact
								path="/dashboard"
								element={Dashboard}
							/>
						</Routes>
					</Box>
				</DbProvider>
			</AuthProvider>
		</Routes>
	);
}

export default App;
