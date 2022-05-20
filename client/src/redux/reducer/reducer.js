import { ASCENDENTE, GET_DETAIL_GAME, GET_GAME, GET_GENEROS, GET_SEARCH_GAME, ORDENA, ORDENR } from "../../constantes/constantes.js";

const initialState = {
    games: [],
    gameDetail: {},
    gameSearch: [],
    generos:[],
    generoDetail:[]
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
        case ORDENA:
            let orderGames = [...state.games]
            orderGames = orderGames.sort((a,b) => {
                if(a.name<b.name){
                    return action.payload === ASCENDENTE ? -1 : 1;
                }
                if(a.name>b.name){
                    return action.payload ===ASCENDENTE ? 1 : -1;
                }
                return 1
            })
            return{
                ...state,
                games: orderGames
            }
        case ORDENR:
            let orderGamesR = [...state.games]
            orderGamesR = orderGamesR.sort((a,b) => {
                if(a.rating<b.rating){
                    return action.payload === ASCENDENTE ? -1 : 1;
                }
                if(a.rating>b.rating){
                    return action.payload ===ASCENDENTE ? 1 : -1;
                }
                return 1
            })
            return{
                ...state,
                games: orderGamesR
            }
        default:
            return state
    }
}