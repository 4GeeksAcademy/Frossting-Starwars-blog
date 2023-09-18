import React from "react";

const CardPlanet = (props) => {

    const { terrain, population } = props.planet

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://picsum.photos/200/200" className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">
                    Population: {population}
                </p>
                <p className="card-text">
                    Terrain: {terrain}
                </p>
                <div className="footerButtoms">
                    <a href="#" className="btn btn-outline-primary">Learn more!</a>
                    <a href="#" className="btn btn-outline-warning"><i class="far fa-heart"></i></a>
                </div>
            </div>
        </div>
    )
}

export default CardPlanet