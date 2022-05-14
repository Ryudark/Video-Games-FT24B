import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getAllGames } from "../../redux/actions/actions.mjs"

export default function Games(){
    let games = useSelector(state=> state.games)
    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllGames())
    },[])

    console.log(games)
    return <div>Probando</div>
}