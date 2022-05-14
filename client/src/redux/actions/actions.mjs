import axios from 'axios';

export const GET_GAME = 'GET_GAME';
export const GET_DETAIL_GAME = 'GET_DETAIL_GAME';
export const POST_GAME = 'POST_GAME';


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