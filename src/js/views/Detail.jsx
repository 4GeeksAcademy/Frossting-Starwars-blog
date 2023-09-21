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
          <div className="card mb-3" style={{ maxwidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={`https://starwars-visualguide.com/assets/img/${imageParam()}/${detailData.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{detailData.properties.name}</h5>
                  <p className="card-text">{detailData.description}</p>
                </div>
                <div className="heroDetail">
                  <ul>
                    <li><strong>Name:</strong> {detailData.properties.name}</li>
                    <li><strong>Birth year:</strong> {detailData.properties.birth_year}</li>
                    <li><strong>Gender:</strong> {detailData.properties.gender}</li>
                    <li><strong>Height:</strong> {detailData.properties.height}</li>
                    <li><strong>Skin color:</strong> {detailData.properties.skin_color}</li>
                    <li><strong>Eyes color:</strong> {detailData.properties.eye_color}</li>
                  </ul>
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