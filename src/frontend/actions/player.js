import axios from 'axios'
import {
    SET_PLAYER_GROUP,
    SET_PLAYER_TRACK_INDEX,
    SET_PLAYER_TRACK_TIME_POSITION,
    SET_PLAYER_IS_LOADING,
    DELETE_PLAYER_ERROR_MESSAGE,
    SET_PLAYER_IS_PLAYING,
    SET_PLAYER_VOLUME,
    SET_SONG_IS_IN_FAVORITES,
} from './types'
import { errorDispatcher } from '../utils/error-handler'

export const setPlayerIsLoading = payload => ({
    type: SET_PLAYER_IS_LOADING,
    payload,
})
export const deletePlayerErrorMessage = () => ({
    type: DELETE_PLAYER_ERROR_MESSAGE,
})

export const setPlayerGroup = payload => ({
    type: SET_PLAYER_GROUP,
    payload,
})
export const setPlayerTrackIndex = payload => ({
    type: SET_PLAYER_TRACK_INDEX,
    payload,
})
export const setPlayerTrackTimePosition = payload => ({
    type: SET_PLAYER_TRACK_TIME_POSITION,
    payload,
})
export const setPlayerIsPlaying = payload => ({
    type: SET_PLAYER_IS_PLAYING,
    payload,
})
export const setPlayerVolume = payload => ({
    type: SET_PLAYER_VOLUME,
    payload,
})
export const setSongIsInFavorites = payload => ({
    type: SET_SONG_IS_IN_FAVORITES,
    payload,
})

export const setPlayerGroupError = payload => ({
    type: SET_PLAYER_GROUP,
    payload,
    error: true,
})

export const setPlayerGroupFromAlbum = ({ id, images, name }) => async dispatch => {
    dispatch(setPlayerIsLoading({ isLoading: true }))
    try {
        const { data } = await axios.get(`/server/recommendations/albums/${id}/tracks`)
        dispatch(setPlayerGroup({ ...data, images, name }))
    } catch (error) {
        const errorHandler = error => dispatch(setPlayerGroupError(error))
        errorDispatcher(error, errorHandler, errorHandler)
    }
    dispatch(setPlayerIsLoading({ isLoading: false }))
}
export const setPlayerGroupFromPlaylist = ({ id, images, name }) => async dispatch => {
    dispatch(setPlayerIsLoading({ isLoading: true }))
    try {
        const { data } = await axios.get(`/server/recommendations/playlists/${id}/tracks`)
        dispatch(setPlayerGroup({ ...data, images, name }))
    } catch (error) {
        const errorHandler = error => dispatch(setPlayerGroupError(error))
        errorDispatcher(error, errorHandler, errorHandler)
    }
    dispatch(setPlayerIsLoading({ isLoading: false }))
}

export const setPlayerGroupFromTrack = ({ id, images, name }) => async dispatch => {
    dispatch(setPlayerIsLoading({ isLoading: true }))
    try {
        const { data } = await axios.get(`/server/track/${id}`)
        dispatch(setPlayerGroup({ items: [data], images, name }))
    } catch (error) {
        const errorHandler = error => dispatch(setPlayerGroupError(error))
        errorDispatcher(error, errorHandler, errorHandler)
    }
    dispatch(setPlayerIsLoading({ isLoading: false }))
}

export const setPlayerGroupFromArtist = ({ id, images, name, market }) => async dispatch => {
    dispatch(setPlayerIsLoading({ isLoading: true }))
    try {
        const { data } = await axios.get(`/server/artist/${id}/top-tracks?market=${market}`)
        dispatch(setPlayerGroup({ items: [...data.tracks], images, name }))
    } catch (error) {
        const errorHandler = error => dispatch(setPlayerGroupError(error))
        errorDispatcher(error, errorHandler, errorHandler)
    }
    dispatch(setPlayerIsLoading({ isLoading: false }))
}
