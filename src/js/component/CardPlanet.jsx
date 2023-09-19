import React from "react";
import { Link } from "react-router-dom";

const CardPlanet = ({planet}) => {

    // const { name, terrain, population } = props.planet

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                 <h5 className="card-title">
                    {planet.properties?.name}
                </h5>
                <p className="card-text">
                    <strong>Population:</strong> {planet.properties?.population}
                </p>
                <p className="card-text">
                    <strong>Terrain:</strong> {planet.properties?.terrain}
                </p>
                <div className="footerButtoms">
                    <Link to={`/planet/${planet._id}`} className="btn btn-outline-primary">Learn more!</Link>
                    <a href="#" className="btn btn-outline-warning"><i className="far fa-heart"></i></a>
                </div>
            </div>
        </div>
    )
}

export default CardPlanet