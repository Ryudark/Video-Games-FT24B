import axios from 'axios';
import { GET_DETAIL_GAME, GET_GAME, GET_GENEROS, GET_GENERO_DETAIL, GET_SEARCH_GAME, ORDEN } from '../../constantes/constantes';

// export const getAllGames = () =>{
//     // return async function (){
//     //     const getGames = await axios.get('http://localhost:3001/videogames');
//     //     return getGames;
//     // }
//     try{
//         fetch('http://localhost:3001/videogames')
//         .then(data => console.log(data))
//     }
//     catch(e){
//         return e
//     }
// }

export function getAllGames(){
    return function(dispatch){
        axios.get('http://localhost:3001/videogames')
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
        console.log(name)
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
    return function(dispatch){
        axios.get(`http://localhost:3001/genres`)
        .then(genero=>{
            dispatch({
                type: GET_GENEROS,
                payload: genero
            })
        })
    }
}
// export function getGenerosDetail(genre){
//     return {
//         type:GET_GENERO_DETAIL,
//         payload:genre
//     }
// }

export function orden(order){
    return {
        type: ORDEN,
        payload: order
    }
}