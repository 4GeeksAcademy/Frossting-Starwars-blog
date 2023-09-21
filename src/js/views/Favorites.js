import React, { useContext } from "react"
import { Context } from "../store/appContext.js";


const Favorites = () => {

    const { store, actions } = useContext(Context);
    
    
    return ( <>
            <div className="">
                <ul className="">
                    { store.Favorites.map( (characterList, index) => <li key={index} className="">
                        {characterList}
                    </li>)}
                </ul>
            </div>
    
    
    
    </>
     )



}

export default Favorites; 