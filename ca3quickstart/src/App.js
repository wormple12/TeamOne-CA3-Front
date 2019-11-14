import React, { useEffect, useState } from "react";
import {
<<<<<<< HEAD
	HashRouter as Router,
	Switch,
	Route,
	useRouteMatch,
	useParams
=======
  HashRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Redirect
>>>>>>> 5f522d20b0f6ec50beb2f5969297f92c0c3cd71d
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

<<<<<<< HEAD
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
=======
const StarWarsPerson = ({ loggedIn }) => {
  if (!loggedIn) {
    return <Redirect to={"/loggedOut"} />;
  } else {
    return (
      <div>
        <h1>Star Wars</h1>
      </div>
    );
  }
};

function App({ loginFacade, starFacade }) {
  const [loggedIn, setLoggedIn] = useState(false);

  // check token regularly
  useEffect(() => {
    /* loginFacade.logout(); */
    const interval = setInterval(() => {
      setLoggedIn(loginFacade.loggedIn());
    }, 10000);
    setLoggedIn(loginFacade.loggedIn());
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <Header loggedIn={loggedIn} />
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route path="/login">
          <LogIn
            apiFacade={loginFacade}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />
        </Route>
        <Route path="/starWars">
          <StarWarsPerson apiFacade={starFacade} loggedIn={loggedIn} />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
>>>>>>> 5f522d20b0f6ec50beb2f5969297f92c0c3cd71d
}
export default App;
