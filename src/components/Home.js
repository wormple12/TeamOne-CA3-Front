import React from "react";

const StartPage = () => {
	return (
		<div>
			<h1>Quick Start Project</h1>
			<h4>Template Instructions</h4>
			<p>
				Suggested setup: See the backend github repository
				<a href="https://github.com/mutestock/TeamOne-CA3">
					backend github repository
				</a>
			</p>
			<h5>Backend Setup</h5>
			<p>
				To set up the project backend to work on your machine and pipeline,
				change the following:
			</p>
			<ul>
				<li>pom.xml : Domain name</li>
				<li>config.properties : names of both databases</li>
				<li>.travis.yaml : name of test database</li>
				<li>Travis, environment variables: REMOTE_USER + REMOTE_PW</li>
				<li>
					rest, @OpenAPIDefinition: Local and remote server url for openapi.
				</li>
				<li>
					CorsResponseFilter, Access-Control-Allow-Origin: Your frontend
					deployment
				</li>
				<li>
					if you want user functionality: run the createUserRoles.sql script on
					your non-test database
				</li>
			</ul>
			<h5>Frontend Setup</h5>
			<p>To set up the project frontend, do the following:</p>

			<ul>
				<li>In the front end repository:</li>
				<li>"npm install"</li>
				<li>"npm install react-router-dom"</li>
				<li>Change the URL in settings.js</li>
				<li>This site is deployed with surge. If you want to do the same:</li>
				<ul>
					<li>"npm install -g surge"</li>
					<li>"npm run build"</li>
					<li>"surge --project ./build --domain YourDomainName.surge.sh"</li>
				</ul>
			</ul>
			<p>
				As per: "The “Default page” on each of these deployed versions must
				include a PERSONAL description written by the specific group member with
				reflections related to how the start code was used" Backend: Pulled the{" "}
				<a href="https://github.com/mutestock/TeamOne-CA3">
					security branch startcode
				</a>
				<br></br>
				<br></br>
				<li>Back:</li>
				<br></br>
				<li>
					{" "}
					Added fetchers for the SWAPI api, made DTOs for the fetched data
				</li>
				<li> and a resource containing endpoints.</li>
				<li> OpenAPI documentation, tests, etc.</li>
				<li></li>
				<li>
					{" "}
					Main group repo was forked at the start of the project, updated the
					files as detailed
				</li>
				<li>
					{" "}
					in the guide above and pulled from the main repo, to my own repo
				</li>
				<li> throughout the process of the project. </li>
				<li> Doing it this way, it was working from day 1.</li>
				<li> </li>
				<li> Front:</li>
				<li></li>
				<li>
					Rewrote some start code related to the usage of tokens from the old
					style of doing React to "hooks".{" "}
				</li>
				<li> Added functionality to visualize the login functionality.</li>
				<li>
					Added functionality to use the starwars endpoints created in the
					backend.
				</li>
				<li> Added jwt-token decoding to extract information.</li>
				<li>
					Added functionality to display fetched information from extracted
					starwars endpoint data
				</li>
				<li> in tables</li>
				<br></br>
				<li> Github followed the same procedures as main group repo.</li>
				<li> For deployment see guide above.</li>
			</p>
		</div>
	);
};

export default StartPage;
