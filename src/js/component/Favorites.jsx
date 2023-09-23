import React, { useContext } from "react"
import { Context } from "../store/appContext.js";


const Favorites = () => {

    const { store, actions } = useContext(Context);

    return (<>
        <div className="btn-group">
            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites 
                ({
                    store.favorites?.length
                } )
            </button>
            <ul className="dropdown-menu">
                {
                    store.favorites.map((characterName, index) =>
                        <li key={index} className="dropdown-item">
                            <a className="dropdown-item">
                                {characterName}
                            </a>
                            <button type="button" onClick={() => actions.removeFavorite(characterName) }>
                                <i class="fas fa-trash"></i>
                            </button>
                        </li>)
                }
            </ul>
        </div>
    </>
     )



}

export default Favorites; 