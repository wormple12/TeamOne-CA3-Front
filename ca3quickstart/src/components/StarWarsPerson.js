import React, { useEffect } from "react";
import { catchHttpErrors } from "../utils";
import { Redirect } from "react-router-dom";

const StarWarsPerson = ({ loggedIn, starFacade, starInfo, setStarInfo }) => {
	useEffect(() => {
		starFacade
			.FetchStar(1)
			.then(d => setStarInfo(starFacade.embeddedTableCreation(d)))
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
