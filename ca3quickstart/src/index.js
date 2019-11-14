import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import loginFacade from "./loginFacade";
<<<<<<< HEAD
import { BrowserRouter as Router } from "react-router-dom";
import starFacade from "./starFacade";

const AppFacadeTime = () => {
	return (
		<div>
			<link
				rel="stylesheet"
				href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
				integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
				crossOrigin="anonymous"
			/>
			<App loginFacade={loginFacade} starFacade={starFacade} />
		</div>
	);
=======
import "bootstrap/dist/css/bootstrap.min.css";

const AppFacadeTime = () => {
  return (
    <div>
      <App loginFacade={loginFacade} />
    </div>
  );
>>>>>>> 5f522d20b0f6ec50beb2f5969297f92c0c3cd71d
};

ReactDOM.render(<AppFacadeTime />, document.getElementById("root"));
