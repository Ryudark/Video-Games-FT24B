import { useState } from "react";
import { searchGame } from "../../redux/actions/actions.js";
import { useDispatch } from "react-redux";

export default function SearchGame(){
    const [search, setSearch] = useState('');
    let dispatch = useDispatch();

    function onSubmit(e){
        e.preventDefault();
        dispatch(searchGame(search))
    }

    function onInputChange(e){
        e.preventDefault();
        setSearch(e.target.value)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onInputChange} value={search}/>
                <input type="submit" value="Buscar"/>
            </form>
        </div>
    )
}