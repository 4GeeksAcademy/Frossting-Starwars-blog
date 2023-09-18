import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import CardCharacter from "../component/CardCharacter.jsx"
import CardPlanet from "../component/CardPlanet.jsx";
import { Context } from "../store/appContext";


export const Home = () => {

	const {store} = useContext(
		Context
	)

	return (
		<div className="container mt-5">
			<div className="characters">
				<h1 className="text-danger">Characters</h1>
				<div className="card-carousel">
					{
						store.characterList.map((character, index) => (
							<div key={index}>
								<CardCharacter 
									character={character}
								/>
							</div>
						))
					}
				</div>
			</div>
			<div className="planets">
				<h1 className="text-danger">Planets</h1>
				<div className="card-carousel">
					{
						store.planetList.map((planet, index) => (
							<div key={index}>
								<CardPlanet 
									planet={planet}
								/>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
};
