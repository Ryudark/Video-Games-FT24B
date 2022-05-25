import { useState } from "react";
import { cargando, searchGame } from "../../redux/actions/actions.js";
import { useDispatch } from "react-redux";
import "./SearchGame.css"

export default function SearchGame(){
    const [search, setSearch] = useState('');
    let dispatch = useDispatch();

    function onSubmit(e){
        e.preventDefault();
        if(!search.trim()){
            return alert("Ingrese una busqueda")
        }else{
            dispatch(searchGame(search))
            setSearch('')
            dispatch(cargando(true))
        }
    }

    function onInputChange(e){
        e.preventDefault();
        setSearch(e.target.value)
    }

    return (
        <div className="cuadrar">
            {/* <form onSubmit={onSubmit}>
                <input type="text" onChange={onInputChange} value={search} placeholder="Busqueda.........."/>
                <input type="submit" value="Buscar"/>
            </form> */}
            <input className="inputS" type="text" onChange={onInputChange} value={search} placeholder="Busqueda.........."/>
            <button className="botonBusqueda" type="submit" onClick={onSubmit}>Buscar</button>
        </div>
    )
}