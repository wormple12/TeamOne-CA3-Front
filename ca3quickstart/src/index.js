import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import loginFacade from "./loginFacade";
import "bootstrap/dist/css/bootstrap.min.css";

const AppFacadeTime = () => {
  return (
    <div>
      <App loginFacade={loginFacade} />
    </div>
  );
};

ReactDOM.render(<AppFacadeTime />, document.getElementById("root"));
