import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getGeneros } from "../../redux/actions/actions.js"
import "./CreateGame.css"

export default function CreateGame(){
    let genero = useSelector(state=> state.generos)
    let dispatch = useDispatch()
    const generos= []
    const plataformas=['Xbox','PC','PlayStation','GameBoy', 'Nintendo Switch', 'Ios', 'Android']
    
    useEffect(()=>{
        dispatch(getGeneros())
    },[dispatch])

    for(let i=0; i<genero.length;i++){
        generos.push(genero[i].name)
    }
    const [game, setGame] = useState({})
    let [check, setCheck]=useState(new Array(19).fill(false))//new Array(generos.length).fill(false)
    let [checkP, setCheckP]=useState(new Array(plataformas.length).fill(false))

    function checkOnChange (position){
        const upCheck = check.map((item, index) =>
        index === position ? !item : item)
        setCheck(upCheck)

        let parcial=[]
        upCheck.map((currentState, index)=>{
            if(currentState===true){
                parcial=parcial.concat(generos[index])
            }
        })
        setGame({...game, genero:parcial})
    }

    function checkOnChangePlat (position){
        const upCheck = checkP.map((item, index) =>
        index === position ? !item : item)
        setCheckP(upCheck)

        let parcial=[]
        upCheck.map((currentState, index)=>{
            if(currentState===true){
                parcial=parcial.concat(plataformas[index])
            }
        })
        setGame({...game, plataformas:parcial})
    }

    function onInputChange(e){
        e.preventDefault()
        setGame({
            ...game,
            [e.target.name]:e.target.value
        })
    }

    function onSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:3001/videogames', game)
        .then(()=>{
        })
        console.log(game)
    }

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
            <div className="scroll">
            {
                generos.map((genero, index)=> {
                    // console.log(genero)
                    return (<div key={index}>
                                <input type="checkbox" name="genero" onChange={()=>checkOnChange(index)}
                                 value={genero}
                                />
                                <label >{genero}</label>
                            </div>)
                }) /////
            }
            </div>
            <label>Rating</label>
            <input onChange={onInputChange} name="rating" type="text" value={game.rating}/>
            <label>Plataformas</label>
            {
                plataformas.map((platf, index)=> {
                    // console.log(genero)
                    return (<div key={index}>
                                <input type="checkbox" name="plataformas" onChange={()=>checkOnChangePlat(index)}
                                 value={platf}
                                />
                                <label >{platf}</label>
                            </div>)
                }) 
            }
            <input type="submit" onClick={()=>alert('Creado con exito')}/>
        </form>
    )
}