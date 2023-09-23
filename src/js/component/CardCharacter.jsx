import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const CardCharacter = ({character}) => {

    const { actions } = useContext(Context);

    return (
        <div className="card">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top" alt="..." /> 
            <div className="card-body">
                <h5>
                    {character.properties?.name}
                </h5>
                <p>
                    <strong>Eye color:</strong> {character.properties?.eye_color}
                </p>
                <p>
                    <strong>Hair color:</strong> {character.properties?.hair_color}
                </p>
                <div className="footerButtoms">
                    <Link to={`/character/${character._id}`} className="btn btn-outline-success">Learn more!</Link>
                    <button type="button" className="btn btn-outline-warning"
                        onClick={() => actions.addFavorite(character)}>
                            <i className="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardCharacter