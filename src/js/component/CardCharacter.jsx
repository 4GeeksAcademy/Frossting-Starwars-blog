import React, { useEffect, useState } from "react";

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
                    Eye color: {eye_color}
                </p>
                <p className="card-text">
                    Hair color: {hair_color}
                </p>
                <div className="footerButtoms">
                    <a href="#" className="btn btn-outline-primary">Learn more!</a>
                    <a href="#" className="btn btn-outline-warning"><i class="far fa-heart"></i></a>
                </div>
            </div>
        </div>
    )
}

export default CardCharacter