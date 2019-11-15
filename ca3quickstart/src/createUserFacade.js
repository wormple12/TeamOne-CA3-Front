import configuration from "./settings";
import { handleHttpErrors } from "./utils";
import jwt_decode from "jwt-decode";

const URL = configuration.URL;

function CreateUserFacade() {

	const makeOptions = (method, body) => {
		var opts = {
			method: method,
			headers: {
				"Content-type": "application/json",
				Accept: "application/json"
			}
		};
		if (body) {
			opts.body = JSON.stringify(body);
		}
		return opts;
	};

	const createUser = (user, pass) => {
		const options = makeOptions("POST", {
			userName: user,
			userPass: pass
		});
		return fetch("http://localhost:8080/teamone-ca3/api/starwars/createUser", options)
			
			.then(res => {
				//setToken(res.token);
			});
	};

	return {
		createUser: createUser
	};
}

let facade = CreateUserFacade();
export default facade;