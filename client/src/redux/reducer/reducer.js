import { ASCENDENTE, GET_DETAIL_GAME, GET_GAME, GET_GENEROS, GET_SEARCH_GAME, ORDEN } from "../../constantes/constantes.js";

const initialState = {
    games: [],
    gameDetail: {},
    gameSearch: [],
    generos:[]
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_GAME: 
        return {
            ...state,
            games: action.payload.data
        }
        case GET_SEARCH_GAME:
            return{
                ...state,
                games: action.payload.data
            }
        case GET_DETAIL_GAME:
            return{
                ...state,
                gameDetail: action.payload.data
            }
        case GET_GENEROS:
            return{
                ...state,
                generos:action.payload.data
            }
        case ORDEN:
            let orderGames = [...state.games]
            orderGames = orderGames.sort((a,b)=>{
                if(a.name<b.name){
                    return action.payload === ASCENDENTE ? -1 : 1;
                }
                if(a.name>b.name){
                    return action.payload ===ASCENDENTE ? 1 : -1;
                }
            })
            return{
                ...state,
                games: orderGames
            }
        default:
            return state
    }
}