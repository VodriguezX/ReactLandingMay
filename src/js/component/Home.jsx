import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />

			<div className="container fluid">
				<Jumbotron />
				<Card />
			</div>
		</div>
	);
};

export default Home;
