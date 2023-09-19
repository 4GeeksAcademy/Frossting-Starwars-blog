import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardCharacter = (props) => {

    const { name, eye_color, hair_color} = props.character

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://picsum.photos/200/200" className="card-img-top" alt="..." /> 
            <div className="card-body">
                <h5 className="card-title">
                    {name}
                </h5>
                <p className="card-text">
                    <strong>Eye color:</strong> {eye_color}
                </p>
                <p className="card-text">
                    <strong>Hair color:</strong> {hair_color}
                </p>
                <div className="footerButtoms">
                    <Link to={`/planetList/${props.character.name}`} className="btn btn-outline-primary">Learn more!</Link>
                    <a href="#" className="btn btn-outline-warning"><i className="far fa-heart"></i></a>
                </div>
            </div>
        </div>
    )
}

export default CardCharacter