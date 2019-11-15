import React, { useState, useEffect } from "react";
import utils, { catchHttpErrors } from "../utils";
import {
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect,
  Prompt
} from "react-router-dom";

const StarWarsPage = ({ loggedIn, starFacade, starInfo, setStarInfo }) => {
  const match = useRouteMatch();
  const [id, setId] = useState("");
  /* const shouldBlock = () => {
    return id !== "";
  };
  let [isBlocking, setIsBlocking] = useState(shouldBlock); */

  const handleChange = evt => {
    const target = evt.target;
    const value = target.value;
    setId(value);
    /* setIsBlocking(shouldBlock); */
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    evt.target.reset();
    setId("");
  };

  if (!loggedIn) {
    return <Redirect to={"/loggedOut"} />;
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          {/* <Prompt
            when={isBlocking}
            message={location =>
              `Are you sure you want to go to ${location.pathname}`
            }
          /> */}
          <input
            type="number"
            id="id"
            placeholder="Enter Person ID"
            defaultValue={id}
          />
          <button type="submit" className="btn btn-primary">
            <Link to={`${match.url}/${id}`}>Submit</Link>
          </button>
        </form>

        <Route path={`${match.path}/:id`}>
          <PersonTables
            starFacade={starFacade}
            starInfo={starInfo}
            setStarInfo={setStarInfo}
          />
        </Route>
      </div>
    );
  }
};

/* const StarWarsPerson = ({ loggedIn, starFacade, starInfo, setStarInfo }) => {
	useEffect(() => {
		starFacade
			.FetchStar(1)
			.then(d => setStarInfo())
			.catch(o => {
				catchHttpErrors(o);
			});
	}, []);

	if (!loggedIn) {
		return <Redirect to={"/loggedOut"} />;
	} else {
		return <div>{starInfo}</div>;
	}
}; */

const PersonTables = ({ starFacade, starInfo, setStarInfo }) => {
  let { id } = useParams();

  useEffect(() => {
    starFacade
      .FetchStar(id)
      .then(d => setStarInfo(utils.embeddedTableCreation(d)))
      .catch(catchHttpErrors);
  }, [id]);

  return (
    <div>
      <hr />
      {starInfo}
    </div>
  );
};

export default StarWarsPage;
