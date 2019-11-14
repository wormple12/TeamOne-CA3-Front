import React, { useEffect, useState } from "react";
import {
	HashRouter as Router,
	Switch,
	Route,
	useRouteMatch,
	useParams
} from "react-router-dom";
import "./App.css";
import LogIn from "./components/LogIn";
import Header from "./components/Header";
/* import uuid from "uuid/v1"; */

const NoMatch = () => {
	return <h3>The page was not found.</h3>;
};

const StartPage = () => {
	return (
		<div>
			<h1>Start Page</h1>
		</div>
	);
};

function App({ loginFacade, starFacade }) {
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<StartPage />
				</Route>
				<Route path="/login">
					<LogIn
						apiFacade={loginFacade}
						loggedIn={loggedIn}
						setLoggedIn={setLoggedIn}
						starFacade={starFacade}
					/>
				</Route>
				<Route>
					<NoMatch />
				</Route>
			</Switch>
		</Router>
	);
}
export default App;
