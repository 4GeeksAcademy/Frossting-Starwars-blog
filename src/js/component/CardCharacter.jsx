import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardCharacter = ({character}) => {

    // const { } = props.character

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top" alt="..." /> 
            <div className="card-body">
                <h5 className="card-title">
                    {character.properties?.name}
                </h5>
                <p className="card-text">
                    <strong>Eye color:</strong> {character.properties?.eye_color}
                </p>
                <p className="card-text">
                    <strong>Hair color:</strong> {character.properties?.hair_color}
                </p>
                <div className="footerButtoms">
                    <Link to={`/character/${character._id}`} className="btn btn-outline-primary">Learn more!</Link>
                    <a href="#" className="btn btn-outline-warning"><i className="far fa-heart"></i></a>
                </div>
            </div>
        </div>
    )
}

export default CardCharacter