import React from "react";

const itemInfo = (props) => {

    const { detailData, nature } = props

    const panelInfo = (position) => {
   
        if (nature == `character`) {
           
            switch (position) {
                case 1:
                    return (
                        <>
                        <h5>Gender</h5>
                        <p>{detailData.properties.gender}</p>
                        </>
                    )
                    break;
                case 2:
                    return (
                        <>
                        <h5>Eyes color</h5>
                        <p>{detailData.properties.eye_color}</p>
                        </>
                    )
                    break;
                case 3:
                    return (
                        <>
                        <h5>Birth year</h5>
                        <p>{detailData.properties.birth_year}</p>
                        </>
                    )
                    break;
                case 4:
                    return (
                        <>
                        <h5>Skin color</h5>
                        <p>{detailData.properties.skin_color}</p>
                        </>
                    )
                    break;
                case 5:
                    return (
                        <>
                        <h5>Height</h5>
                        <p>{detailData.properties.height}</p>
                        </>
                    )
                    break;
            }
        }
        if (nature == `planet`) {
            switch (position) {
                case 1:
                    return (
                        <>
                        <h5>Climate</h5>
                        <p>{detailData.properties.climate}</p>
                        </>
                    )
                    break;
                case 2:
                    return (
                        <>
                        <h5>Population</h5>
                        <p>{detailData.properties.population}</p>
                        </>
                    )
                    break;
                case 3:
                    return (
                        <>
                        <h5>Orbital Period</h5>
                        <p>{detailData.properties.orbital_period}</p>
                        </>
                    )
                    break;
                case 4:
                    return (
                        <>
                        <h5>Rotation Period</h5>
                        <p>{detailData.properties.rotation_period}</p>
                        </>
                    )
                    break;
                case 5:
                    return (
                        <>
                        <h5>Diameter</h5>
                        <p>{detailData.properties.diameter}</p>
                        </>
                    )
                    break;
            }
        }
        if (nature == `vehicule`) {
            switch (position) {
                case 1:
                    return (
                        <>
                        <h5>Manufacturer</h5>
                        <p>{detailData.properties.manufacturer}</p>
                        </>
                    )
                    break;
                case 2:
                    return (
                        <>
                        <h5>Model</h5>
                        <p>{detailData.properties.model}</p>
                        </>
                    )
                    break;
                case 3:
                    return (
                        <>
                        <h5>Vehicle class</h5>
                        <p>{detailData.properties.vehicle_class}</p>
                        </>
                    )
                    break;
                case 4:
                    return (
                        <>
                        <h5>Max atmosphering speed</h5>
                        <p>{detailData.properties.max_atmosphering_speed}</p>
                        </>
                    )
                    break;
                case 5:
                    return (
                        <>
                        <h5>Cost in credits</h5>
                        <p>{detailData.properties.cost_in_credits}</p>
                        </>
                    )
                    break;
            }
        }
    }

    return (
        <div className="row">
            <div className="detailColumn col-2">
                <h5>Name</h5>
                <p>{detailData.properties.name}</p>
            </div>
            <div className="detailColumn col-2">
                { panelInfo(1) }
            </div>
            <div className="detailColumn col-2">
                { panelInfo(2) }
            </div>
            <div className="detailColumn col-2">
                { panelInfo(3) }
            </div>
            <div className="detailColumn col-2">
                { panelInfo(4) }    
            </div>
            <div className="detailColumn col-2">
                { panelInfo(5) }
            </div>
        </div>
    )
}

export default itemInfo