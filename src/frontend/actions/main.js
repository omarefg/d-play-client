/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import axios from 'axios'
import {
    SET_MAIN_RECOMENDATION_IS_LOADING,
    SET_MAIN_GENRES_IS_LOADING,
    SET_MAIN_MY_LISTS_IS_LOADING,
    SET_MAIN_ERROR_MESSAGE,
    SET_MAIN_RECOMMENDATION_PAGE_DATA,
    SET_MAIN_GENRES_PLAYLISTS,
    SET_MAIN_GENRES_PLAYLISTS_INDEX,
    SET_MAIN_IS_CREATING_PLAYLIST,
    SET_MAIN_PLAYLIST_FORM_INPUT_VALUE,
    SET_MAIN_PLAYLIST_FORM_TEXT_AREA_VALUE,
    SET_MAIN_PLAYLIST_FORM_IMG_SRC,
} from './types'
import { signInUser, updateUser } from './auth'
import { errorDispatcher } from '../utils/error-handler'

export const setMainRecomendationIsLoading = payload => ({
    type: SET_MAIN_RECOMENDATION_IS_LOADING,
    payload,
})
export const setMainGenresIsLoading = payload => ({
    type: SET_MAIN_GENRES_IS_LOADING,
    payload,
})
export const setMainMyListsIsLoading = payload => ({
    type: SET_MAIN_MY_LISTS_IS_LOADING,
    payload,
})
export const setMainErrorMessage = payload => ({
    type: SET_MAIN_ERROR_MESSAGE,
    payload,
})

export const setMainRecommendationPageData = payload => ({
    type: SET_MAIN_RECOMMENDATION_PAGE_DATA,
    payload,
})
export const setMainGenresPlaylists = payload => ({
    type: SET_MAIN_GENRES_PLAYLISTS,
    payload,
})
export const setMainGenresPlaylistsIndex = payload => ({
    type: SET_MAIN_GENRES_PLAYLISTS_INDEX,
    payload,
})
export const setMainIsCreatingPlaylist = payload => ({
    type: SET_MAIN_IS_CREATING_PLAYLIST,
    payload,
})
export const setMainPlaylistFormInputValue = payload => ({
    type: SET_MAIN_PLAYLIST_FORM_INPUT_VALUE,
    payload,
})
export const setMainPlaylistFormTextAreaValue = payload => ({
    type: SET_MAIN_PLAYLIST_FORM_TEXT_AREA_VALUE,
    payload,
})
export const setMainPlaylistFormImgSrc = payload => ({
    type: SET_MAIN_PLAYLIST_FORM_IMG_SRC,
    payload,
})

export const setMainRecommendationPageDataRequest = ({ country }) => async dispatch => {
    dispatch(setMainRecomendationIsLoading({ isLoading: true }))
    try {
        const { data } = await axios.get(`/server/recommendations/recommendation-page?country=${country}`)
        dispatch(setMainRecommendationPageData(data))
    } catch (error) {
        const unauthorizedErrorCalback = _err => dispatch(signInUser(null))
        const otherErrorCallback = err => dispatch(setMainErrorMessage(err))
        errorDispatcher(error, unauthorizedErrorCalback, otherErrorCallback)
    }
    dispatch(setMainRecomendationIsLoading({ isLoading: false }))
}
export const setMainGenresPlaylistsRequest = ({ country, offset, limit }) => async dispatch => {
    dispatch(setMainGenresIsLoading({ isLoading: true }))
    try {
        const playlists = []
        let { data: categories } = await axios.get(`/server/categories?country=${country}&limit=${limit}&offset=${offset}`)
        categories = categories.categories.items.map(({ id, name }) => ({ id, name }))
        for (const categorie of categories) {
            const { id, name } = categorie
            try {
                const { data: { playlists: { items } } } = await axios.get(`/server/categories/${id}/playlists?country=${country}`)
                playlists.push({ items, name })
            } catch (error) {}
        }
        dispatch(setMainGenresPlaylists({ genresPlaylists: playlists }))
        dispatch(setMainGenresPlaylistsIndex({ genresPlaylistsIndex: offset + limit }))
    } catch (error) {
        const unauthorizedErrorCalback = _err => dispatch(signInUser(null))
        const otherErrorCallback = err => dispatch(setMainErrorMessage(err))
        errorDispatcher(error, unauthorizedErrorCalback, otherErrorCallback)
    }
    dispatch(setMainGenresIsLoading({ isLoading: false }))
}
export const setMainMyListsRequest = ({ id, ...payload }, setLoading = true) => async dispatch => {
    setLoading && dispatch(setMainMyListsIsLoading({ isLoading: true }))
    try {
        await axios({
            url: `/server/users/${id}`,
            method: 'put',
            data: payload,
        })
        dispatch(updateUser({ user: payload }))
    } catch (error) {
        const unauthorizedErrorCalback = _err => dispatch(signInUser(null))
        const errorHandler = error => dispatch(setMainErrorMessage(error))
        errorDispatcher(error, unauthorizedErrorCalback, errorHandler)
    }
    setLoading && dispatch(setMainMyListsIsLoading({ isLoading: false }))
}
