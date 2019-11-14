import React, { useEffect, useState } from "react";
import {
	HashRouter as Router,
	Switch,
	Route,
	useRouteMatch,
	useParams
} from "react-router-dom";
import "./App.css";
import LogIn from "./components/LogIn";
import Header from "./components/Header";
import { handleHttpErrors, makeOptions } from "./utils";
import configuration from "./settings";
import apiFacade from "./loginFacade";
import { object } from "prop-types";

const starFacade = (function() {
	function FetchStar(id) {
		const options = makeOptions("GET", true);
		return fetch(
			configuration.URL + "/api/starwars/starWars/" + id,
			options
		).then(o => o.json());
	}

	function ImbeddedTableCreation(info) {
		let filtered = { ...info };
		let noObjects = Object.entries(filtered).filter(
			o => typeof o[1] !== "object"
		);
		return (
			<div>
				<table className="table">
					<thead>
						<tr>
							{Object.values(noObjects).map(j => (
								<td>{j[0]}</td>
							))}
						</tr>
					</thead>
					<tbody>
						<tr>
							{Object.values(noObjects).map(j => (
								<td>{j[1]}</td>
							))}
						</tr>
					</tbody>
				</table>
			</div>
		);
	}

	function MultiTable(info) {
		let d = Object.entries({ ...info });
		console.log(d);
		let kd = d.filter(o => typeof Object.values(o)[1] === "object");
		console.log(kd);
		let kdr = kd.filter(
			o =>
				typeof Object.values(Object.values(o))[1][Symbol.iterator] !==
				"function"
		);
		kd.map(o => console.log(Object.values(Object.values(o))[1]));

		kd.map(o =>
			console.log(
				typeof Object.values(Object.values(o))[1][Symbol.iterator] ===
					"function"
			)
		);

		console.log(kdr);

		return (
			<div>
				{Object.entries(kdr)[1].map(o => (
					<table>
						<thead>
							<tr>
								{Object.values(o).map(j => (
									<td>{j[1]}</td>
								))}
							</tr>
						</thead>
						<tbody>
							<tr>
								{Object.values(o[1]).map(j => (
									<td>{j[1]}</td>
								))}
							</tr>
						</tbody>
					</table>
				))}
			</div>
		);
	}

	function MultiTable2(info) {}

	return {
		FetchStar: FetchStar,
		ImbeddedTableCreation: ImbeddedTableCreation,
		MultiTable: MultiTable
	};
})();

export default starFacade;
