import React, {useContext, useEffect} from "react"
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom"

const Detail =()=>{
    const params = useParams()
    console.log(params)

    const {store} = useContext(Context)

    const details =()=>{
        const search = store.characterList.find((item)=> item.name == params.name)
        console.log(search)
    }
  useEffect(()=>{
    details()
  }, []) 

    return(
        <>
        {params.nature == "character" ? 
        <h1>Soy Character</h1>:
        params.nature == "planet" ?
        <h1>Hola soy planeta</h1>:
        null
        }
        <div className="card mb-3" style={{maxwidth: "540px"}}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src="https://picsum.photos/200/200" className="img-fluid rounded-start" alt="..."/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
						</div>
					</div>
				</div>
			</div>
        </>
        
    )
}

export default Detail;