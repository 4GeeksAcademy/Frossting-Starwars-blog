import React, {useContext, useEffect} from "react"
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom"

const Detail =()=>{
    const params = useParams()
    console.log(params)

    const {store} = useContext(Context)

    const details =()=>{
        const search = store.characterList.find((props)=> props.name == params.name)
        console.log(search)
    }
  useEffect(()=>{
    details()
  }, []) 

    return(
        <>
        <h1>Hola que tal</h1>
        </>
    )
}

export default Detail;