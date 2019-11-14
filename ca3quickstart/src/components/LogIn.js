import React, { useEffect, useState } from "react";
import { catchHttpErrors, makeOptions } from "../utils";
import configuration from "../settings";
import { handleHttpErrors } from "../utils";

const LogIn = ({ apiFacade, loggedIn, setLoggedIn, starFacade }) => {
	//
	const logout = () => {
		apiFacade.logout();
		setLoggedIn(false);
	};
	const login = (user, pass) => {
		apiFacade
			.login(user, pass)
			.then(res => setLoggedIn(true))
			.catch(err => {
				catchHttpErrors(err);
			});
	};
	return (
		<div>
			{!loggedIn ? (
				<LogInForm login={login} />
			) : (
				<LoggedIn
					apiFacade={apiFacade}
					logout={logout}
					starFacade={starFacade}
				/>
			)}
		</div>
	);
};

export default LogIn;

const LogInForm = ({ login }) => {
	const emptyUser = { username: "", password: "" };
	const [user, setUser] = useState(emptyUser);

	const handleChange = event => {
		event.preventDefault();
		setUser({ ...user, [event.target.id]: event.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log("Submission..");
		login(user.username, user.password);
	};

	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleSubmit} onChange={handleChange}>
				<input placeholder="User Name" id="username" />
				<input placeholder="Password" id="password" />
				<button>Login</button>
			</form>
		</div>
	);
};

const LoggedIn = ({ apiFacade, logout, starFacade }) => {
	const [starInfo, setStarInfo] = useState(null);

	useEffect(() => {
		starFacade
			.FetchStar(1)
			.then(d => setStarInfo(starFacade.MultiTable(d)))
			.catch(o => console.log(o, "Shit happened"));
		return () => console.log("cleaned...");
	}, []);

	const options = makeOptions("GET", true);
	const [data, setData] = useState("Fetching");

	return (
		<div>
			<h2>Data Received from server</h2>
			<h3>{data}</h3>
			{starInfo}
			<button onClick={logout}>Logout</button>
		</div>
	);
};
