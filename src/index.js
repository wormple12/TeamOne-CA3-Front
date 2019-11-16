import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import loginFacade from "./loginFacade";
import starFacade from "./starFacade";
import createUserFacade from "./createUserFacade";
import "bootstrap/dist/css/bootstrap.min.css";

const AppFacadeTime = () => {
	return (
		<div>
			<App loginFacade={loginFacade} starFacade={starFacade} createUserFacade={createUserFacade} />
		</div>
	);
};

ReactDOM.render(<AppFacadeTime />, document.getElementById("root"));
