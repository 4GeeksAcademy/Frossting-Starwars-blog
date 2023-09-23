import React, { useContext} from "react";
import "../../styles/home.css";
import CardCharacter from "../component/CardCharacter.jsx"
import CardPlanet from "../component/CardPlanet.jsx";
import CardVehicle from "../component/CardVehicle.jsx";
import { Context } from "../store/appContext";


export const Home = () => {

	const { store } = useContext(
		Context
	)

	return (
		<div className="bigContainer mt-5">
			<div className="characters">
				<h1 className="text-warning">Characters</h1>
				<div className="card-carousel">
					{
						store.characterList.map((character) => (
							<div key={character._id}>
								<CardCharacter
									character={character}
								/>
							</div>
						))
					}
				</div>
			</div>
			<div className="planets">
				<h1 className="text-warning">Planets</h1>
				<div className="card-carousel">
					{
						store.planetList.map((planet) => (
							<div key={planet._id}>
								<CardPlanet
									planet={planet}
								/>
							</div>
						))
					}
				</div>
			</div>
			<div className="vehicles">
				<h1 className="text-warning">Vehicles</h1>
				<div className="card-carousel">
					{
						store.vehicleList.map((vehicle) => (
							<div key={vehicle._id}>
								<CardVehicle
									vehicle={vehicle}
								/>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
};
