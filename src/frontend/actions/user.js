
import axios from 'axios'
import {
    SET_USER_MESSAGE,
    SET_USER_VARIANT,
    SET_USER_IS_LOADING,
    SET_USER_IS_LOADING_EMAIL,
    SET_USER_IS_LOADING_PASSWORD,
} from './types'
import { signInUser, updateUser } from './auth'
import { errorDispatcher } from '../utils/error-handler'

export const setUserMessage = payload => ({
    type: SET_USER_MESSAGE,
    payload,
})
export const setUserVariant = payload => ({
    type: SET_USER_VARIANT,
    payload,
})
export const setUserIsLoading = payload => ({
    type: SET_USER_IS_LOADING,
    payload,
})
export const setUserIsLoadingEmail = payload => ({
    type: SET_USER_IS_LOADING_EMAIL,
    payload,
})
export const setUserIsLoadingPassword = payload => ({
    type: SET_USER_IS_LOADING_PASSWORD,
    payload,
})

export const modifyUserRequest = ({ profilePic, name, lastName, id }) => async dispatch => {
    dispatch(setUserIsLoading({ isLoading: true }))
    try {
        await axios({
            url: `/server/users/${id}`,
            method: 'put',
            data: { profilePic, name, lastName },
        })
        dispatch(updateUser({ user: { profilePic, name, lastName } }))
        dispatch(setUserVariant({ variant: 'success' }))
        dispatch(setUserMessage({ message: 'Usuario actualizado' }))
    } catch (error) {
        const unauthorizedErrorCalback = _err => dispatch(signInUser(null))
        const errorHandler = error => {
            dispatch(setUserMessage(error))
            dispatch(setUserVariant({ variant: 'error' }))
        }
        errorDispatcher(error, unauthorizedErrorCalback, errorHandler)
    }
    dispatch(setUserIsLoading({ isLoading: false }))
}

export const modifyUserEmailRequest = ({ email, id }) => async dispatch => {
    dispatch(setUserIsLoadingEmail({ isLoadingEmail: true }))
    try {
        await axios({
            url: `/server/users/${id}/update-email/${email}`,
            method: 'get',
        })
        dispatch(setUserVariant({ variant: 'success' }))
        dispatch(setUserMessage({ message: '¡Correo de confirmación enviado!' }))
    } catch (error) {
        const unauthorizedErrorCalback = _err => dispatch(signInUser(null))
        const errorHandler = error => {
            dispatch(setUserMessage(error))
            dispatch(setUserVariant({ variant: 'error' }))
        }
        errorDispatcher(error, unauthorizedErrorCalback, errorHandler)
    }
    dispatch(setUserIsLoadingEmail({ isLoadingEmail: false }))
}

export const modifyUserPasswordRequest = ({ oldP, newP, id }) => async dispatch => {
    dispatch(setUserIsLoadingPassword({ isLoadingPassword: true }))
    try {
        await axios({
            url: `/server/users/${id}/update-password`,
            method: 'put',
            data: { oldP, newP },
        })
        window.location.href = '/server/auth/sign-out'
    } catch (error) {
        const unauthorizedErrorCalback = _err => dispatch(signInUser(null))
        const errorHandler = error => {
            dispatch(setUserMessage(error))
            dispatch(setUserVariant({ variant: 'error' }))
        }
        errorDispatcher(error, unauthorizedErrorCalback, errorHandler)
    }
    dispatch(setUserIsLoadingPassword({ isLoadingPassword: false }))
}
