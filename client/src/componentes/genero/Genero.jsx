import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getGeneros } from "../../redux/actions/actions"
import TarjetaSimple from "../tarjeta/TarjetaSimple"

export default function Genero(){
    let genero = useSelector(state=> state.generos)
    let params = useParams()
    const genre = params.genero ? params.genero : genero.name;
    let dispatch = useDispatch()

    
    useEffect(()=>{
        dispatch(getGeneros())
    },[dispatch])
    let filter= genero.filter(g=>g.name===genre)
    let filter2=[]
    filter[0].games.map(g=>filter2.push(g))

    return (
        <div>
            {
                filter2.map(datos=><TarjetaSimple 
                    key={datos.id}
                    id={datos.id}
                    name={datos.name}   
                    image='imagen'
                    genero=''
                />)
            }
        </div>
    )
}