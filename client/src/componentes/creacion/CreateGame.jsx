import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getGeneros } from "../../redux/actions/actions.js"

export default function CreateGame(){
    let genero = useSelector(state=> state.generos)
    let dispatch = useDispatch()

    console.log(genero)

    useEffect(()=>{
        dispatch(getGeneros())
    },[])

    console.log(genero)
    return (
        <div>
            fguncoina
            {/* {
                games.map(datos=><TarjetaSimple 
                    id={datos.id}
                    image={datos.image}
                    name={datos.name}    
                />)
            } */}
        </div>
    )
}