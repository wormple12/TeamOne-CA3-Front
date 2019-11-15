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

const StarWarsPage = ({
  loggedIn,
  starFacade,
  starInfo,
  setStarInfo,
  id,
  setId
}) => {
  const match = useRouteMatch();

  const handleChange = evt => {
    const target = evt.target;
    const value = target.value;
    setId(value);
  };

  if (!loggedIn) {
    return <Redirect to={"/loggedOut"} />;
  } else {
    return (
      <div>
        <br />
        <form onChange={handleChange}>
          <input
            type="number"
            id="person_id"
            placeholder="Enter Person ID"
            defaultValue={id}
          />
          <Link to={`${match.url}/${id}`}>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Link>
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
