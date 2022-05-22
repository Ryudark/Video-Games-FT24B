import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ALL, ASCENDENTE, CREADO, DESCENDENTE, NOCREADO } from "../../constantes/constantes";
import { creado, filtradoPorGenero, ordenA, ordenR } from "../../redux/actions/actions";

export default function Orden(){

    const genero = useSelector((state) => state.generos);
    const dispatch = useDispatch();

    function onSelectChangeA(e){
        dispatch(ordenA(e.target.value))
    }
    function onSelectChangeR(e){
        dispatch(ordenR(e.target.value))
    }
    function onSelectChangeCreate(e){
        dispatch(creado(e.target.value))
    }
    function onSelectChangeG(e){
        dispatch(filtradoPorGenero(e.target.value))
    }

    return(
        <div>
            <p>GENEROS</p>
            <select defaultValue="Genres"
                onChange={(e) => onSelectChangeG(e)}
                >
                {/* <option disabled>
                    Generos
                </option> */}
                <option value={ALL}>
                    All
                </option>
                {genero.map((g) => (
                    <option key={g.id} value={g.name}>
                    {g.name}
                    </option>
                ))}
            </select>
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
            <p>CREADO</p>
            <select name="select" onChange={onSelectChangeCreate}>
                <option value={ALL}>---ALL---</option>
                <option value={CREADO}>CREADO</option>
                <option value={NOCREADO}>NOCREADO</option>
            </select>
            
        </div>
    )
}