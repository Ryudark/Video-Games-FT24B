import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getGeneros, getGenerosDetail } from "../../redux/actions/actions"
import TarjetaSimple from "../tarjeta/TarjetaSimple"

export default function Genero(){
    let genero = useSelector(state=> state.generos)
    let params = useParams()
    const genre = params.genero ? params.genero : genero.name;
    let dispatch = useDispatch()

    
    useEffect(()=>{
        dispatch(getGeneros())
    },[])
    let filter= genero.filter(g=>g.name===genre)
    console.log(filter)
    let filter2=[]
    filter[0].games.map(g=>filter2.push(g))
    // if(filter<0){
    //     return 1
    // }
    // else{
    // }
    console.log(filter2)
    // let filter2=''
    // if(filter.length<2){
    //     filter2 = filter[0]
    //     console.log(filter2.games)
    // }

    // useEffect(()=>{
    //     dispatch(getGenerosDetail(genre))
    // },[])
    // return <div>golas0.</div>
    return (
        <div>
            {
                filter2.map(datos=><TarjetaSimple 
                    id={datos.id}
                    name={datos.name}   
                    image='imagen'
                    genero=''
                />)
            }
        </div>
    )
}