import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getAllGames, getGeneros } from "../../redux/actions/actions.js"
import TarjetaSimple from "../tarjeta/TarjetaSimple.jsx"


export default function Games(games){


    return (
        <div >
            {/* {
                games.map(datos=><TarjetaSimple key={datos.id}
                    id={datos.id}
                    image={datos.image}
                    name={datos.name}   
                    genero={datos.genres}
                />)
            } */}
        </div>
    )
}