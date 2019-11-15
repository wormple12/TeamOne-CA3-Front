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
		).then(o => o.json()); // handleHTTPErrors
	}

	function embeddedTableCreation(info) {
		let filtered = { ...info };
		let noObjects = Object.entries(filtered).filter(
			o => typeof o[1] !== "object"
		);
		return (
			<div>
				<h3>Person</h3>
				<table className="table">
					<thead>
						<tr>
							{Object.values(noObjects).map(j => (
								<th>{j[0]}</th>
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
					<br></br>
				</table>
				{multiTable2(info)}
			</div>
		);
	}

	function multiTable(info) {
		let d = Object.entries({ ...info });
		let kd = d.filter(o => typeof Object.values(o)[1] === "object");
		let kdr = kd.filter(
			o =>
				typeof Object.values(Object.values(o))[1][Symbol.iterator] !==
				"function"
		);

		console.log(kdr);

		return (
			<div>
				{kdr.map(o => (
					<div>
						<h3>{Object.values(o[0])}</h3>
						<table className="table">
							<thead>
								<tr>
									{Object.keys(o[1]).map(j => (
										<th>{j}</th>
									))}
								</tr>
							</thead>
							<tbody>
								<tr>
									{Object.values(o[1]).map(j => (
										<td>{j}</td>
									))}
								</tr>
							</tbody>
							<br></br>
						</table>
					</div>
				))}
			</div>
		);
	}

	function multiTable2(info) {
		let d = Object.entries({ ...info });
		let kd = d.filter(o => typeof Object.values(o)[1] === "object");
		let kdr = kd.filter(
			o =>
				typeof Object.values(Object.values(o))[1][Symbol.iterator] ===
				"function"
		);
		let kdrjl = kdr.map(o => Object.values(Object.values(o)));
		let kdrjll = kdrjl.map(o => Object.values(o)[1]);
		let count = 0;

		return (
			<div>
				{multiTable(info)}
				{kdrjll.map(o => (
					<div>
						<h3>{Object.values(kdrjl[count++][0])}</h3>

						<table className="table">
							<thead>
								<tr>
									{Object.keys(Object.values(o)[0]).map(k => (
										<th>{k}</th>
									))}
								</tr>
							</thead>
							<tbody>
								{Object.values(o).map(j => (
									<tr>
										{Object.values(j).map(k => (
											<td>{k}</td>
										))}
									</tr>
								))}
							</tbody>
							<br></br>
						</table>
					</div>
				))}
			</div>
		);
	}

	return {
		FetchStar: FetchStar,
		embeddedTableCreation: embeddedTableCreation,
		multiTable: multiTable,
		multiTable2: multiTable2
	};
})();

export default starFacade;
