import { ALL, ASCENDENTE, CREADO, CREATE, FILTRADO_POR_GENERO, GET_DETAIL_GAME, GET_GAME, GET_GENEROS, GET_SEARCH_GAME, LIMPIARDETALLE, LOADER, ORDENA, ORDENR } from "../../constantes/constantes.js";

const initialState = {
    games: [],
    gameDetail: {},
    allGames: [],
    generos:[],
    generoDetail:[],
    platforms: [],
    loader: false
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_GAME: 
            // let platforms = [];
            // action.payload.forEach((game) => {
            //     platforms = [...platforms, ...game.platforms];
            // });
            return {
                ...state,
                games: action.payload,
                allGames: action.payload,
                loader: false,
            }
        case GET_SEARCH_GAME:
            return{
                ...state,
                games: action.payload,
                allGames: action.payload,
                loader: false,
            }
        case GET_DETAIL_GAME:
            return{
                ...state,
                gameDetail: action.payload,
                loader: false,
            }
        case GET_GENEROS:
            return{
                ...state,
                generos:action.payload
            }
        case ORDENA:
            let orderGames = [...state.allGames]
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
            let orderGamesR = [...state.allGames]
            orderGamesR = orderGamesR.sort((a,b) => {
                if(a.rating<b.rating){
                    return action.payload === ASCENDENTE ? 1 : -1;
                }
                if(a.rating>b.rating){
                    return action.payload ===ASCENDENTE ? -1 : 1;
                }
                return 1
            })
            return{
                ...state,
                games: orderGamesR
            }
        case CREATE:
            let allgames = [...state.allGames]
            const filtroCreado= action.payload===CREADO 
            ? allgames.filter(creado=> creado.esCreado===true)
            : allgames.filter(creado=> creado.esCreado!==true)
            return{
                ...state,
                games: action.payload=== ALL ? state.allGames : filtroCreado
            }
        case FILTRADO_POR_GENERO:
            const videoJuegos = state.allGames;
            const generosFiltrados =
                action.payload === ALL
                ? videoJuegos
                : videoJuegos.filter((e) => e.genres.includes(action.payload));
            return {
                ...state,
                games: generosFiltrados,
            };
        case LIMPIARDETALLE:
            return{
                ...state,
                gameDetail:{}
            }
        case LOADER:
            return {
                ...state,
                loader: action.payload,
            };
        default:
            return state
    }
}