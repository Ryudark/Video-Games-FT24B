import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getGeneros } from "../../redux/actions/actions.js"

export default function CreateGame(){
    let genero = useSelector(state=> state.generos)
    let dispatch = useDispatch()
    const generos= []
    console.log(genero)

    for(let i=0; i<genero.length;i++){
        generos.push(genero[i].name)
    }
    console.log(generos)

    const [game, setGame] = useState({})

    function onInputChange(e){
        e.preventDefault()
        setGame({
            ...game,
            [e.target.name]:e.target.value
        })
    }

    function onSubmit(e){
        e.preventDefault();
        console.log(game)
        // axios.post('http://localhost:3001/videogames', game)
        // .then(()=>{
        // })
    }

    useEffect(()=>{
        dispatch(getGeneros())
    },[])

    return (
        <form onSubmit={onSubmit}>
            <label>Nombre</label>
            <input onChange={onInputChange} name="name" type="text" value={game.name}/>
            <label>Descripción</label>
            <input onChange={onInputChange} name="descripcion" type="text" value={game.descripcion}/>
            <label>Imagen</label>
            <input onChange={onInputChange} name="image" type="text" value={game.image}/>
            <label>Fecha de Lanzamiento</label>
            <input onChange={onInputChange} name="fechaLanzamiento" type="text" value={game.fechaLanzamiento}/>
            <label>Generos</label>
            {
                generos.map((genero, index)=> {
                    // console.log(genero)
                    return (<>
                                <input name="genero" onChange={onInputChange} type="checkbox" value={genero}/>
                                <label >{genero}</label>
                                </>)
                })
            }
            <label>Rating</label>
            <input onChange={onInputChange} name="rating" type="text" value={game.rating}/>
            <label>Plataformas</label>
            <input onChange={onInputChange} name="plataformas" type="text" value={game.plataformas}/>
            <input type="submit" onClick={()=>alert('Creado con exito')}/>
        </form>
    )
}