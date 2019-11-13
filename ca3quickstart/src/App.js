import React, { useEffect, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
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
      <h3>Start Page</h3>
    </div>
  );
};

function App({ loginFacade }) {
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
