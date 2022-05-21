import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { getDetailGame } from "../../redux/actions/actions.js"

export default function GameDetail(){
    let game = useSelector(state=> state.gameDetail)
    let params = useParams()
    let dispatch = useDispatch()
    const id = params.id ? params.id : game.id;

    useEffect(()=>{
        dispatch(getDetailGame(id))
    },[dispatch, id])

    return (
        <div key={game.id}>
            <h1>{game.name}</h1>
            <h3>Lanzamiento: {game.released}</h3>
            <p>Descripcion: {game.description}</p>
            <p>Plataformas: {game.platforms}</p>
            <p>Rating: {game.rating}</p>
            <img src={game.image} alt={game.name}/>
            <div>
            {game.genres ? game.genres.map((genero, index) => <Link key={index} to={`/genero/${genero.name}`}><p>{genero.name}</p></Link>):0}
            </div>
            <Link to="/home">
                <button>HOME</button>
            </Link>
        </div>
    )
}