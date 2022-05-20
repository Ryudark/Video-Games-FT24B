import axios from 'axios';
import { CREATE, GET_DETAIL_GAME, GET_GAME, GET_GENEROS, GET_SEARCH_GAME, ORDENA, ORDENR } from '../../constantes/constantes';

export function getAllGames(){
    return async function(dispatch){
        await axios.get('http://localhost:3001/videogames')
        .then(games=>{
            dispatch({
                type: GET_GAME,
                payload: games
            })
        })
    }
}

export function searchGame(name){
    return function(dispatch){
        axios.get(`http://localhost:3001/videogames?name=${name}`)
        .then(games=>{
            dispatch({
                type:GET_SEARCH_GAME,
                payload: games
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
                payload: game
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
                payload: genero
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