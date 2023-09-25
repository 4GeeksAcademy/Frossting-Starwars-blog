import React, { useContext, useEffect, useState } from "react"
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom"
import ItemInfo from "../component/ItemInfoPanel.jsx" 

const Detail = () => {
    const params = useParams()

    const [detailData, setDetailData] = useState()

    const { store } = useContext(Context)

    const imageParam = () => {
        if (params.nature == `character`) {
            return "characters"
        }
        if (params.nature == `planet`) {
            return "planets"
        }
        if (params.nature == `vehicule`) {
            return "vehicles"
        }
    }

    const getInfo = () => {
        if (params.nature == `character`) {
            const search = store.characterList.find((item) => {
                return item._id == params.id
            })
            setDetailData(search)
        }
        if (params.nature == `planet`) {
            const search = store.planetList.find((item) => item._id == params.id)
            setDetailData(search)
        }
        if (params.nature == `vehicule`) {
            const search = store.vehicleList.find((item) => item._id == params.id)
            setDetailData(search)
        }
    }
    useEffect(() => {
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
                                <ItemInfo detailData={detailData} nature={params.nature} />
                            </div>
                        </div>
                    </div>
                )
            }
        </>

    )
}

export default Detail;