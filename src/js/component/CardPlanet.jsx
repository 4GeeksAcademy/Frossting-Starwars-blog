import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const CardPlanet = ({planet}) => {

    const { actions } = useContext(Context);

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
                    <button type="button" className="btn btn-outline-warning"
                        onClick={() => actions.addFavorite(planet) }
                    ><i className="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardPlanet