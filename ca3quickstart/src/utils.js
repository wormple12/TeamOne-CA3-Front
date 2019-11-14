import loginFacade from "./loginFacade";

export function catchHttpErrors(err) {
  if (err.status) {
    err.fullError.then(e => console.log(e.detail));
  } else {
    console.log("Network error");
  }
}

export function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

export const makeOptions = (method, addToken, body) => {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json"
      //"x-access-token":localStorage.getItem("jwtToken")
    }
  };
  if (addToken && loginFacade.loggedIn()) {
    opts.headers["x-access-token"] = loginFacade.getToken();
  }
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
};
