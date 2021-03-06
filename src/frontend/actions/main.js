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
    SET_MAIN_SEARCH_VALUE,
    SET_MAIN_SEARCH_RESULTS,
    SET_MAIN_SEARCH_IS_LOADING,
    SET_MAIN_GENRES_IS_LOADING_OBSERVER,
    SET_MAIN_IS_EDITING_PLAYLIST,
    SET_MAIN_PLAYLIST_FORM_ID,
    SET_MAIN_AUDIO_SEARCH_IS_LOADING,
} from './types'
import { signInUser, updateUser } from './auth'
import { errorDispatcher } from '../utils/error-handler'

export const setMainRecomendationIsLoading = payload => ({
    type: SET_MAIN_RECOMENDATION_IS_LOADING,
    payload,
})
export const setMainAudioSearchIsLoading = payload => ({
    type: SET_MAIN_AUDIO_SEARCH_IS_LOADING,
    payload,
})
export const setMainGenresIsLoading = payload => ({
    type: SET_MAIN_GENRES_IS_LOADING,
    payload,
})
export const setMainGenresIsLoadingObserver = payload => ({
    type: SET_MAIN_GENRES_IS_LOADING_OBSERVER,
    payload,
})
export const setMainMyListsIsLoading = payload => ({
    type: SET_MAIN_MY_LISTS_IS_LOADING,
    payload,
})
export const setMainSearchIsLoading = payload => ({
    type: SET_MAIN_SEARCH_IS_LOADING,
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
export const setMainIsEditingPlaylist = payload => ({
    type: SET_MAIN_IS_EDITING_PLAYLIST,
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
export const setMainPlaylistFormId = payload => ({
    type: SET_MAIN_PLAYLIST_FORM_ID,
    payload,
})
export const setMainSearchValue = payload => ({
    type: SET_MAIN_SEARCH_VALUE,
    payload,
})
export const setMainSearchResults = payload => ({
    type: SET_MAIN_SEARCH_RESULTS,
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
    offset === 0 && dispatch(setMainGenresIsLoading({ isLoading: true }))
    offset > 0 && dispatch(setMainGenresIsLoadingObserver({ isLoadingObserver: true }))
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
    offset === 0 && dispatch(setMainGenresIsLoading({ isLoading: false }))
    offset > 0 && dispatch(setMainGenresIsLoadingObserver({ isLoadingObserver: false }))
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

export const setMainSearchResultsRequest = ({ query }, setLoading = true) => async dispatch => {
    setLoading && dispatch(setMainSearchIsLoading({ isLoading: true }))
    try {
        const { data: searchResults } = await axios.get(`server/search?q=${query}`)
        const noResults = Object.keys(searchResults).filter(key => searchResults[key].items.length > 0).length === 0
        if (noResults) {
            dispatch(setMainErrorMessage({ message: 'No hubo resultados' }))
        } else {
            dispatch(setMainSearchResults({ searchResults }))
        }
    } catch (error) {
        const unauthorizedErrorCalback = _err => dispatch(signInUser(null))
        const errorHandler = error => dispatch(setMainErrorMessage(error))
        errorDispatcher(error, unauthorizedErrorCalback, errorHandler)
    }
    setLoading && dispatch(setMainSearchIsLoading({ isLoading: false }))
}

export const setMainAudioSearchResultsRequest = (b64, cb) => async dispatch => {
    dispatch(setMainAudioSearchIsLoading({ isLoading: true }))
    try {
        const { data: { artist, song } } = await axios({
            url: 'server/search/audio-search',
            method: 'post',
            data: { sample: b64 },
        })
        const meta = { artist, song }
        const query = Object.keys(meta).map(key => meta[key].normalize('NFD').replace(/[\u0300-\u036f]/g, '')).join('%20')
        cb && cb()
        dispatch(setMainSearchResultsRequest({ query }))
    } catch (error) {
        const unauthorizedErrorCalback = _err => dispatch(signInUser(null))
        const errorHandler = error => dispatch(setMainErrorMessage(error))
        errorDispatcher(error, unauthorizedErrorCalback, errorHandler)
    }
    dispatch(setMainAudioSearchIsLoading({ isLoading: false }))
}
