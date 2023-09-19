import React from "react";
import { Link } from "react-router-dom";

const CardPlanet = (props) => {

    const { name, terrain, population } = props.planet

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://picsum.photos/200/200" className="card-img-top" alt="..." />
            <div className="card-body">
                 <h5 className="card-title">
                    {name}
                </h5>
                <p className="card-text">
                    <strong>Population:</strong> {population}
                </p>
                <p className="card-text">
                    <strong>Terrain:</strong> {terrain}
                </p>
                <div className="footerButtoms">
                    <Link to={`/planetList/${props.planet.name}`} className="btn btn-outline-primary">Learn more!</Link>
                    <a href="#" className="btn btn-outline-warning"><i className="far fa-heart"></i></a>
                </div>
            </div>
        </div>
    )
}

export default CardPlanet