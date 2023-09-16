import React, { useEffect, useState } from "react";

const CardCharacter = (props) => {
    const { name, url, uid } = props.character

    const [characterInfo, setCharacterInfo] = useState({});

    const initialUpdate = async () => {
        try {
            const bringCharacterInfo = await fetch(url)
            const characterJSON = await bringCharacterInfo.json()
            setCharacterInfo(characterJSON.result)
            console.log("Request character", bringCharacterInfo, characterJSON)

        } catch (error) {
            console.log(error)

        }
    }
    useEffect(() => {
        initialUpdate()
    }, []);

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://picsum.photos/200/200" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">
                    {name}
                </h5>
                <p className="card-text">
                    {url}
                </p>
                <p className="card-text">
                    {uid}
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