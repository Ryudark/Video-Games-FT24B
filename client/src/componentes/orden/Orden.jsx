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
            <p>ALFABETICO</p>
            <select name="select" onChange={onSelectChangeA}>
                <option>---ALFABETICO---</option>
                <option value={ASCENDENTE}>ASCENDENTE</option>
                <option value={DESCENDENTE}>DESCENDENTE</option>
            </select>
            <p>RATING</p>
            <select name="select" onChange={onSelectChangeR}>
                <option>---RATING---</option>
                <option value={ASCENDENTE}>ASCENDENTE</option>
                <option value={DESCENDENTE}>DESCENDENTE</option>
            </select>
            
        </div>
    )
}