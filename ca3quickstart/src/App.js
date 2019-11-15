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
import StarWarsPerson from "./components/StarWarsPerson";
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
  const [starInfo, setStarInfo] = useState(null);

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
            starFacade={starFacade}
          />
        </Route>
        <Route path="/starWars">
          <StarWarsPerson
            starFacade={starFacade}
            loggedIn={loggedIn}
            starInfo={starInfo}
            setStarInfo={setStarInfo}
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
