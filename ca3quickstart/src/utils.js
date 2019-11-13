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
