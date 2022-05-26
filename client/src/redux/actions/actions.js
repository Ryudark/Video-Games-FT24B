import axios from 'axios';
import { CREATE, FILTRADO_POR_GENERO, GET_DETAIL_GAME, GET_GAME, GET_GENEROS, GET_SEARCH_GAME, LIMPIARDETALLE, LOADER, ORDENA, ORDENR } from '../../constantes/constantes';

export function getAllGames(){
    return async function(dispatch){
        try{
            let completo= await axios.get('http://localhost:3001/videogames')
            return dispatch({
                type: GET_GAME,
                payload: completo.data
            })

        }
        catch(e){
            console.log(e)
        }
        
    }
}

export function searchGame(name){
    return async function(dispatch){
        try {
            let search= await axios.get(`http://localhost:3001/videogames?name=${name}`)
            return dispatch({
                type: GET_SEARCH_GAME,
                payload: search.data
            })
        } catch (e) {
            return dispatch({
                type: GET_SEARCH_GAME,
                payload: []
            })
        }
    }
}

export function getDetailGame(id){
    return async function(dispatch){
        try{
            let detail= await axios.get(`http://localhost:3001/videogames/${id}`)
            return dispatch({
                type: GET_DETAIL_GAME,
                payload: detail.data
            })
        }
        catch(e){
            console.log(e)
        }    
    }
}

export function getGeneros(){
    return async function(dispatch){
        try{
            let generos= await axios.get(`http://localhost:3001/genres`)
            return dispatch({
                type: GET_GENEROS,
                payload: generos.data
            })
        }
        catch(e){
            console.log(e)
        }

    }
}
export function postGame(game){
    return async function(dispatch){
        await axios.post('http://localhost:3001/videogames', game)
    }
}

export function ordenA(order){
    return {
        type: ORDENA,
        payload: order
    }
}
export function ordenR(order){
    return {
        type: ORDENR,
        payload: order
    }
}
export function creado(order){
    return {
        type: CREATE,
        payload: order
    }
}

export function filtradoPorGenero(genero) {
    return {
      type: FILTRADO_POR_GENERO,
      payload:genero,
    };
}

export function limpiarDetalle(){
    return {
        type: LIMPIARDETALLE,
    }
}

export function cargando(payload) {
    return {
      type: LOADER,
      payload,
    };
  }