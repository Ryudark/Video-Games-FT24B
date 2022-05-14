import { GET_GAME } from "../actions/actions.mjs";

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
        default:
            return state
    }
}