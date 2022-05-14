import axios from 'axios';

export const GET_GAME = 'GET_GAME';
export const GET_DETAIL_GAME = 'GET_DETAIL_GAME';
export const POST_GAME = 'POST_GAME';


export const getAllGames = () =>{
    return async function (){
        const getGames = await axios.get('http://localhost:3001/videogames');
        return getGames;
    }
}

console.log(getAllGames());