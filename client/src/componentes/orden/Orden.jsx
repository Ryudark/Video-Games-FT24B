import { useDispatch } from "react-redux";
import { ASCENDENTE, DESCENDENTE } from "../../constantes/constantes";
import { ordenA, ordenR } from "../../redux/actions/actions";

export default function Orden(){
    const dispatch = useDispatch();
    
    function onSelectChangeA(e){
        dispatch(ordenA(e.target.value))
    }
    function onSelectChangeR(e){
        dispatch(ordenR(e.target.value))
    }

    return(
        <div>
            <select name="select" onChange={onSelectChangeA}>
                <option>---ALFABETICO---</option>
                <option value={ASCENDENTE}>ASCENDENTE</option>
                <option value={DESCENDENTE}>DESCENDENTE</option>
            </select>
            <select name="select" onChange={onSelectChangeR}>
                <option>---RATING---</option>
                <option value={ASCENDENTE}>ASCENDENTE</option>
                <option value={DESCENDENTE}>DESCENDENTE</option>
            </select>
            
        </div>
    )
}