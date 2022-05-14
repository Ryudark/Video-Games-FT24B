import { GET_DETAIL_GAME, GET_GAME } from "../actions/actions.mjs";

const initialState = {
    games: [],
    gameDetail: {},
    gameSearch: []
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_GAME: 
        return {
            ...state,
            games: action.payload.data
        }
        case GET_DETAIL_GAME:
            return{
                ...state,
                gameDetail: action.payload.data
            }
        default:
            return state
    }
}