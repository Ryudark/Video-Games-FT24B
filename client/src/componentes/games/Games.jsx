import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getAllGames } from "../../redux/actions/actions.js"
import TarjetaSimple from "../tarjeta/TarjetaSimple.jsx"

export default function Games(){
    let games = useSelector(state=> state.games)
    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllGames())
    },[])
    console.log(games)

    return (
        <div>
            {
                games.map(datos=><TarjetaSimple 
                    id={datos.id}
                    image={datos.image}
                    name={datos.name}   
                    genero={datos.genres}
                />)
            }
        </div>
    )
}