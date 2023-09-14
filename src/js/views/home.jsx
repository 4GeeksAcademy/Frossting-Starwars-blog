import React from "react";
import "../../styles/home.css";
import CardCharacter from "../component/CardCharacter.jsx"
import CardPlanet from "../component/CardPlanet.jsx";

export const Home = () => {
	return (
		<div className="container mt-5">
			<div className="character">
				<h1 className="text-danger">Character</h1>
				<div className="card-carousel">
					<CardCharacter/>
				</div>
			</div>
			<div className="planet">
			<h1 className="text-danger">Planet</h1>
				<div className="card-carousel">
					<CardPlanet/>
				</div>
			</div>
		</div>
	)
};
