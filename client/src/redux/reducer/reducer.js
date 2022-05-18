import { ASCENDENTE, GET_DETAIL_GAME, GET_GAME, GET_GENEROS, GET_GENERO_DETAIL, GET_SEARCH_GAME, ORDEN } from "../../constantes/constantes.js";

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
        // case GET_GENERO_DETAIL:
        //     console.log(state.generos)
        //     let generoCopy= [...state.generos]
        //     console.log(generoCopy)
        //     let detail=generoCopy.filter(g=>g.name===action.payload)
        //     return{
        //         ...state,
        //         generoDetail: detail
        //     }
        default:
            return state
    }
}