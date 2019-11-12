import React, { Component, useEffect, useState } from "react";

import {
  HashRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  NavLink
} from "react-router-dom";
import facade from "./apiFacade";
import "./App.css";
import uuid from "uuid/v1";

/*
function App({ loginFunctionality }) {

 const emptyPerson = [
	 {username = "", password = "" }
 ];
 const [person, setPerson] = useState("");

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/userpage">
          <UserPage props = {person} />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

const Login = ({ props }) => {

	const onChange = event =>{

	};

	useEffect(() =>{

	});

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <h2>Login</h2>
      <form onSubmit={this.login} onChange={this.onChange}>
        <input placeholder="User Name" id="username" />
        <input placeholder="Password" id="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

const UserPage = ({ props }) => {
  return(
	  <div>
		  <link
    	    rel="stylesheet"
    	    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    	    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    	    crossorigin="anonymous"
		  />
	  </div>
  );
};

const NoMatch = () => {
  return <h3>Nothing here but us lemmings</h3>;
};
*/

const LogIn = ({ login }) => {
  const emptyUser = { username: "", password: "" };
  const [user, setUser] = useState(emptyUser);

  const handleChange = event => {
    event.preventDefault();
    setUser({ ...user, [event.target.id]: event.target.value });
    console.log("cake");
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Submission..");
    login(user.username, user.password);
    Object.entries({ user }).map(o => console.log(o));
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
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
    Insert user name here with set.
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

function App() {
  //Props === apiFacade?

  const [loginBool, setLoginBool] = useState(false);

  const logout = () => {
    facade.logout();
    setLoginBool(false);
  }; //TODO
  const login = (user, pass) => {
    //facade.login(user, pass).then(res => this.setState({ loggedIn: true }));
    facade.login(user, pass).then(res => setLoginBool(true));
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
