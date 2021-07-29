import { FETCH_LYRICS, FETCH_LYRICS_SUCCESS, FETCH_LYRICS_FAIL } from "../actions/getLyrics";

const initialState = {
    music: {
        song: {
            title: '',
            lyrics: ''
        }
    },
   isFetching: false,
   err: null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_LYRICS):
            return ({
                ...state,
                isFetching: true
            })
        case(FETCH_LYRICS_SUCCESS):
            return ({
                ...state,
                song: action.payload,
                isFetching: false
            })    
        case(FETCH_LYRICS_FAIL):
            return ({
                ...state,
                err: action.payload,
                isFetching: false
            })
        default:
            return state;
    };
};