import React, { useEffect } from "react";
import { catchHttpErrors } from "../utils";
import { Redirect } from "react-router-dom";
import utils from "../utils";

const StarWarsPerson = ({ loggedIn, starFacade, starInfo, setStarInfo }) => {
	useEffect(() => {
		starFacade
			.FetchStar(1)
			.then(d => setStarInfo(utils.embeddedTableCreation(d)))
			.catch(o => {
				catchHttpErrors(o);
			});
	}, []);

	if (!loggedIn) {
		return <Redirect to={"/loggedOut"} />;
	} else {
		return <div>{starInfo}</div>;
	}
};

export default StarWarsPerson;
