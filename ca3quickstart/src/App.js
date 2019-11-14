import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Redirect
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
}
export default App;
