import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getDetailGame } from "../../redux/actions/actions.mjs"

export default function GameDetail(){
    let game = useSelector(state=> state.gameDetail)
    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getDetailGame('32'))
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