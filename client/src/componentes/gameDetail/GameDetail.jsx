import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getDetailGame } from "../../redux/actions/actions.js"

export default function GameDetail(){
    let game = useSelector(state=> state.gameDetail)
    let params = useParams()
    let dispatch = useDispatch()
    const id = params.id ? params.id : game.id;


    console.log(params.id)
    console.log(id)

    useEffect(()=>{
        dispatch(getDetailGame(id))
    },[])

    console.log(game)
    return (
        <div>
            <h1>{game.name}</h1>
            <h3>Lanzamiento: {game.fechaLanzamiento}</h3>
            <p>Descripcion: {game.descripcion}</p>
            <p>Plataformas: {game.plataformas}</p>
            <p>Rating: {game.rating}</p>
            <img src={game.image} alt={game.name}/>
        </div>
    )
}