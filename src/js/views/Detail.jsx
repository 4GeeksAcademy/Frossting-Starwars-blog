import React, { useContext, useEffect, useState } from "react"
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom"

const Detail = () => {
    const params = useParams()
    console.log("Este es el parametro", params)

    const [detailData, setDetailData] = useState()
    console.log("Details", detailData)

    const { store } = useContext(Context)

    const imageParam = () => {
        if (params.nature == `character`) {
            return "characters"
        }
        if (params.nature == `planet`) {
            return "planets"
        }

    }

    const getInfo = () => {
        if (params.nature == `character`) {
            console.log("StoreCharacter", store.characterList)

            const search = store.characterList.find((item) => {
                console.log("itene", item, params.id)
                return item._id == params.id
            })
            console.log("Buscar", search)
            setDetailData(search)
        }
        if (params.nature == `planet`) {
            console.log("StorePlanet", store.planetList)
            const search = store.planetList.find((item) => item._id == params.id)
            console.log("Buscar", search)
            setDetailData(search)
        }

    }

    useEffect(() => {
        console.log("WatchNature", params.nature)
        getInfo()
    }, [params])

    return (
        <>
            {
                detailData && (
                    <div className="itemContainer" style={{ maxwidth: "200px" }}>
                        <div className="cardDetail">
                            <img src={`https://starwars-visualguide.com/assets/img/${imageParam()}/${detailData.uid}.jpg`} className="img-fluid" alt="..." />
                            <div className="itemTitle">
                                <h1>{detailData.properties.name}</h1>
                                <p>{detailData.description}</p>
                                <div className="row">
                                    <div className="detailColumn col-2">
                                        <h5>Name</h5>
                                        <p>{detailData.properties.name}</p>
                                    </div>
                                    <div className="detailColumn col-2">
                                        <h5>Gender</h5>
                                        <p>{detailData.properties.gender}</p>
                                    </div>
                                    <div className="detailColumn col-2">
                                        <h5>Eyes color</h5>
                                        <p>{detailData.properties.eye_color}</p>
                                    </div>
                                    <div className="detailColumn col-2">
                                        <h5>Birth year</h5>
                                        <p>{detailData.properties.birth_year}</p>
                                    </div>
                                    <div className="detailColumn col-2">
                                        <h5>Skin color</h5>
                                        <p>{detailData.properties.skin_color}</p>
                                    </div>
                                    <div className="detailColumn col-2">
                                        <h5>Height</h5>
                                        <p>{detailData.properties.height}</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                )
            }
        </>

    )
}

export default Detail;