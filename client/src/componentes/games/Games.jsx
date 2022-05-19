import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getAllGames, getGeneros } from "../../redux/actions/actions.js"
import TarjetaSimple from "../tarjeta/TarjetaSimple.jsx"
import "./Games.css"

export default function Games(){
    let games = useSelector(state=> state.games)
    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getGeneros())
        dispatch(getAllGames())
    },[dispatch])

    return (
        <div  className="contenedor">
            {
                games.map(datos=><TarjetaSimple key={datos.id}
                    id={datos.id}
                    image={datos.image}
                    name={datos.name}   
                    genero={datos.genres}
                />)
            }
        </div>
    )
}