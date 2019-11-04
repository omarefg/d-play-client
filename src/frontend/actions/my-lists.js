import axios from 'axios'
import {
    SET_MY_LISTS,
    MY_LISTS_LOADER_HANDLER,
    DELETE_MY_LISTS_ERROR_MESSAGE,
    IS_CREATING_LIST_HANDLER,
    SET_PLAYLIST_FORM_INPUT_VALUE,
    SET_PLAYLIST_FORM_TEXT_AREA_VALUE,
    SET_PLAYLIST_FORM_IMG_SRC,
} from './types'
import { signInUser, updateUser } from './auth'
import { errorDispatcher } from '../utils/error-handler'

export const deleteMyListsErrorMessage = () => ({
    type: DELETE_MY_LISTS_ERROR_MESSAGE,
})
export const setMyListsIsLoading = payload => ({
    type: MY_LISTS_LOADER_HANDLER,
    payload,
})

export const setMyListsIsCreatingList = payload => ({
    type: IS_CREATING_LIST_HANDLER,
    payload,
})
export const setPlaylistFormInputValue = payload => ({
    type: SET_PLAYLIST_FORM_INPUT_VALUE,
    payload,
})
export const setPlaylistFormTextAreaValue = payload => ({
    type: SET_PLAYLIST_FORM_TEXT_AREA_VALUE,
    payload,
})
export const setPlaylistFormImgSrc = payload => ({
    type: SET_PLAYLIST_FORM_IMG_SRC,
    payload,
})

export const setMyListsError = payload => ({
    type: SET_MY_LISTS,
    payload,
    error: true,
})

export const setMyListsRequest = ({ id, ...payload }) => async dispatch => {
    dispatch(setMyListsIsLoading({ isLoading: true }))
    try {
        await axios({
            url: `/server/users/${id}`,
            method: 'put',
            data: payload,
        })
        dispatch(updateUser({ user: payload }))
    } catch {
        const unauthorizedErrorCalback = _err => dispatch(signInUser(null))
        const errorHandler = error => dispatch(setMyListsError(error))
        errorDispatcher(error, unauthorizedErrorCalback, errorHandler)
    }
    dispatch(setMyListsIsLoading({ isLoading: false }))
}
