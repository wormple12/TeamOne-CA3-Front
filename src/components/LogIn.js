import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { catchHttpErrors, makeOptions } from "../utils";

const LogIn = ({ apiFacade, loggedIn, setLoggedIn }) => {
  const login = (user, pass) => {
    apiFacade
      .login(user, pass)
      .then(res => setLoggedIn(true))
      .catch(err => {
        catchHttpErrors(err, true);
      });
  };

  return (
    <div>{!loggedIn ? <LogInForm login={login} /> : <Redirect to="/" />}</div>
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
      <form
        className="form-horizontal"
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <div className="form-group">
          <div className="col-sm-9">
            <input
              className="form-control"
              placeholder="User Name"
              id="username"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-9">
            <input
              className="form-control"
              placeholder="Password"
              id="password"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-9">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};
