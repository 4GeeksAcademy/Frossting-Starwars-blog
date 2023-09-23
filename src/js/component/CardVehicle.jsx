import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const CardVehicle = ({vehicle}) => {

    const { actions } = useContext(Context);

    return (
        <div className="card">
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                 <h5>
                    {vehicle.properties?.name}
                </h5>
                <p>
                    <strong>Model:</strong> {vehicle.properties?.model}
                </p>
                <p>
                    <strong>Manufacturer:</strong> {vehicle.properties?.manufacturer}
                </p>
                <div className="footerButtoms">
                    <Link to={`/vehicule/${vehicle._id}`} className="btn btn-outline-success">Learn more!</Link>
                    <button type="button" className="btn btn-outline-warning"
                        onClick={() => actions.addFavorite(vehicle)}>
                            <i className="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardVehicle