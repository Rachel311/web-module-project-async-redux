import axios from 'axios';

export const FETCH_LYRICS = "FETCH_LYRICS"
export const FETCH_LYRICS_SUCCESS = "FETCH_LYRICS_SUCCESS"
export const FETCH_LYRICS_FAIL = "FETCH_LYRICS_FAIL"

export const getLyrics = () => {
    return dispatch => {
        dispatch(fetchLyrics())
        axios.get('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
            .then(res => {
                console.log(res)
                dispatch(fetchLyricsSuccess(res.data)
                )
            })
            .catch(err => {
                dispatch(fetchLyricsFail(err))
            })
    }
}

export const fetchLyrics = () => {
    return ({ type: FETCH_LYRICS })
}

export const fetchLyricsSuccess = (lyrics) => {
    return ({ type: FETCH_LYRICS_SUCCESS, payload: lyrics })
}

export const fetchLyricsFail = (err) => {
    return ({ type: FETCH_LYRICS_FAIL, payload: err})
}