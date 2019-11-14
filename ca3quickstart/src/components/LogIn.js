import React, { useEffect, useState } from "react";
import { catchHttpErrors, makeOptions } from "../utils";
import configuration from "../settings";
import { handleHttpErrors } from "../utils";

const LogIn = ({ apiFacade, loggedIn, setLoggedIn }) => {
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
        <LoggedIn apiFacade={apiFacade} logout={logout} />
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

const LoggedIn = ({ apiFacade, logout }) => {
  const options = makeOptions("GET", true);
  console.log(options);
  const [data, setData] = useState("Fetching");
  console.log("apifacade check: ", apiFacade);
  console.log("Token check: ", apiFacade.tokenDecoder());
    console.log(apiFacade.getToken());
    const user = fetch(configuration.URL + "/api/starwars/"+apiFacade.tokenDecoder().username, options)
    .then(
      handleHttpErrors
    ).then(data => {setData(data.msg);}
      );
    

    return (
      <div>
        <h2>Data Received from server</h2>
        <h3>{data}</h3>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

