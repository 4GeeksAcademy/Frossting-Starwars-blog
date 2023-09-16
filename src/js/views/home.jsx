import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import CardCharacter from "../component/CardCharacter.jsx"
import CardPlanet from "../component/CardPlanet.jsx";
import CardVehicule from "../component/CardVehicule.jsx";


export const Home = () => {

	const [characters, setCharacters] = useState([]);

	const initialUpdate = async () => {
		try {
			const bringCharacter = await fetch("https://www.swapi.tech/api/people/")
			const characterJSON = await bringCharacter.json()
			setCharacters(characterJSON.results)
			console.log("Request character", bringCharacter, characterJSON)

		} catch (error) {
			console.log(error)

		}
	}
	useEffect(() => {
		initialUpdate()
	}, []);

	return (
		<div className="container mt-5">
			<div className="characters">
				<h1 className="text-danger">Characters</h1>
				<div className="card-carousel">
					{
						characters.map((character, index) => (
							<li key={index}>
								<CardCharacter 
									character={character}
								/>
							</li>
						))
					}
				</div>
			</div>
			<div className="planets">
				<h1 className="text-danger">Planets</h1>
				<div className="card-carousel">
					<CardPlanet />
				</div>
			</div>
			<div className="vehicules">
				<h1 className="text-danger">Vehicules</h1>
				<div className="card-carousel">
					<CardVehicule />
				</div>
			</div>
		</div>
	)
};
