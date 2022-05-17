import { useDispatch } from "react-redux";
import { ASCENDENTE, DESCENDENTE } from "../../constantes/constantes";
import { orden } from "../../redux/actions/actions";

export default function Orden(){
    const dispatch = useDispatch();
    
    function onSelectChange(e){
        dispatch(orden(e.target.value))
    }

    return(
        <select name="select" onChange={onSelectChange}>
            <option>---SELECCIONE---</option>
            <option value={ASCENDENTE}>ASCENDENTE</option>
            <option value={DESCENDENTE}>DESCENDENTE</option>
        </select>
    )
}