import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  NavLink
} from "react-router-dom";
import "./App.css";
import { catchHttpErrors } from "./utils";
/* import uuid from "uuid/v1"; */

/*
####

Note that the routing functionality is highly preferable. 
Consider how to implement it with the current set up

###

*/

/* function App({ loginFunctionality }) {


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/userpage">
          <UserPage />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
} */

const NoMatch = () => {
  return <h3>The page was not found.</h3>;
};

const LogIn = ({ login }) => {
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
    Object.entries({ user }).map(o => console.log(o));
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

const LoggedIn = () => {
  const [data, setData] = useState("Fetching");

  /*useEffect(() =>{
    Insert user name here reactions here
	});
*/

  //componentDidMount() {}
  // ^^ useEffect
  return (
    <div>
      <h2>Data Received from server</h2>
      <h3>{data}</h3>
    </div>
  );
};

function App({ apiFacade }) {
  const [loginBool, setLoginBool] = useState(false);

  const logout = () => {
    apiFacade().logout();
    setLoginBool(false);
  }; //TODO
  const login = (user, pass) => {
    apiFacade()
      .login(user, pass)
      .then(res => setLoginBool(true))
      .catch(err => {
        catchHttpErrors(err);
      });
  }; //TODO

  return (
    <div>
      {!loginBool ? (
        <LogIn login={login} />
      ) : (
        <div>
          <LoggedIn />
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}
export default App;
