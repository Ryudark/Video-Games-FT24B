import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { cargando, getDetailGame, limpiarDetalle } from "../../redux/actions/actions.js"
import charge from "../../imagenes/cargando.gif"

export default function GameDetail(){
    // let params = useParams()
    // const id = params.id ? params.id : game.id;
    let dispatch = useDispatch()
    const { id } = useParams();
    
    useEffect(()=>{
        dispatch(cargando(true))
        dispatch(getDetailGame(id))
        return function () {
            dispatch(limpiarDetalle());
          };
    },[dispatch, id])
    const loading = useSelector((state) => state.loader);
    let game = useSelector(state=> state.gameDetail)

    if(loading){
        return(
          <div>
            <img src={charge} alt="Cargando.... Por favor espere...." />
          </div>
        )
      }
    
    return (
        <div>{
            game? <div key={game.id}>
                <h1>{game.name}</h1>
                <h3>Lanzamiento: {game.released}</h3>
                <p>Descripcion: {game.description}</p>
                <p>Plataformas: {game.platforms}</p>
                <p>Rating: {game.rating}</p>
                <img src={game.image} alt={game.name}/>
                <div >
                {game.genres ? game.genres.map((genero, index) => <Link key={index} to={`/genero/${genero.name}`}><p>{genero.name}</p></Link>):0}
                </div>
                <Link to="/home">
                    <button>HOME</button>
                </Link>
            </div>:null
            }
        </div>
    )
}