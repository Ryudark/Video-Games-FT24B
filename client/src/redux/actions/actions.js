import axios from 'axios';
import { CREATE, FILTRADO_POR_GENERO, GET_DETAIL_GAME, GET_GAME, GET_GENEROS, GET_SEARCH_GAME, ORDENA, ORDENR } from '../../constantes/constantes';

export function getAllGames(){
    return async function(dispatch){
        await axios.get('http://localhost:3001/videogames')
        .then(games=>{
            dispatch({
                type: GET_GAME,
                payload: games.data
            })
        })
    }
}

export function searchGame(name){
    return function(dispatch){
        axios.get(`http://localhost:3001/videogames?name=${name}`)
        .then(games=>{
            console.log(games)
            dispatch({
                type:GET_SEARCH_GAME,
                payload: games.data
            })
        })
    }
}

export function getDetailGame(id){
    return function(dispatch){
        axios.get(`http://localhost:3001/videogames/${id}`)
        .then(game=>{
            dispatch({
                type: GET_DETAIL_GAME,
                payload: game.data
            })
        })
    }
}

export function getGeneros(){
    return async function(dispatch){
        await axios.get(`http://localhost:3001/genres`)
        .then(genero=>{
            dispatch({
                type: GET_GENEROS,
                payload: genero.data
            })
        })
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
    console.log(genero)
    return {
      type: FILTRADO_POR_GENERO,
      payload:genero,
    };
  }