import React, {useEffect, useState} from "react";

const CardCharacter = (props) => {
    const {name, url, uid} = props.character

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
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">
                    {name}
                </h5>
                <p className="card-text">
                    {}
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default CardCharacter