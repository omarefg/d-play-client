import axios from 'axios'
import {
    SET_GENRES_PLAYLISTS,
    SET_GENRES_PLAYLISTS_INDEX,
    GENRES_LOADER_HANDLER,
    DELETE_GENRES_ERROR_MESSAGE,
} from './types'
import { signInUser } from './auth'
import { errorDispatcher } from '../utils/error-handler'

export const deleteGenresErrorMessage = () => ({
    type: DELETE_GENRES_ERROR_MESSAGE,
})
export const setGenreIsLoading = payload => ({
    type: GENRES_LOADER_HANDLER,
    payload,
})

export const setGenresPlaylistsIndex = payload => ({
    type: SET_GENRES_PLAYLISTS_INDEX,
    payload,
})
export const setGenresPlaylists = payload => ({
    type: SET_GENRES_PLAYLISTS,
    payload,
})

export const setGenresPlaylistsError = payload => ({
    type: SET_GENRES_PLAYLISTS,
    payload,
    error: true,
})

export const setGenresPlaylistsRequest = ({ country, offset }) => async dispatch => {
    dispatch(setGenreIsLoading({ isLoading: true }))
    try {
        let { data: categories } = await axios.get(`/server/categories?country=${country}&offset=${offset}`)
        categories = categories.categories.items.map(({ id, name }) => ({ id, name }))
        console.log(categories)
        // dispatch(setGenresCategories(data))
        // dispatch(setGenresPlaylistsIndex({ genresPlaylistsIndex: offset + 10 }))
    } catch (error) {
        const unauthorizedErrorCalback = _err => dispatch(signInUser(null))
        const otherErrorCallback = err => dispatch(setGenresPlaylistsError(err))
        errorDispatcher(error, unauthorizedErrorCalback, otherErrorCallback)
    }
    dispatch(setGenreIsLoading({ isLoading: false }))
}
