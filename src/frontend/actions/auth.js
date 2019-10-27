import axios from 'axios'
import {
    REGISTER_USER,
    DELETE_AUTH_ERROR_MESSAGE,
    SET_AUTH_IS_LOADING,
    SET_USER_IS_JUST_REGISTERED,
    SIGN_IN_USER,
} from './types'
import { requestErrorHandler } from '../utils/error-handler'

export const deleteAuthErrorMessage = () => ({
    type: DELETE_AUTH_ERROR_MESSAGE,
})
export const setAuthIsLoading = payload => ({
    type: SET_AUTH_IS_LOADING,
    payload,
})
export const setUserIsJustRegistered = payload => ({
    type: SET_USER_IS_JUST_REGISTERED,
    payload,
})

export const registerUser = payload => ({
    type: REGISTER_USER,
    payload,
})
export const signInUser = payload => ({
    payload,
    type: SIGN_IN_USER,
})

export const registerUserError = payload => ({
    type: REGISTER_USER,
    payload,
    error: true,
})
export const signInUserError = payload => ({
    type: SIGN_IN_USER,
    payload,
    error: true,
})

export const registerUserRequest = (payload, cb) => async dispatch => {
    dispatch(setAuthIsLoading({ isLoading: true }))
    try {
        await axios.post('/auth/sign-up', payload)
        dispatch(registerUser())
        cb && cb()
    } catch (error) {
        dispatch(registerUserError(requestErrorHandler(error)))
    }
    dispatch(setAuthIsLoading({ isLoading: false }))
}
export const signInUserRequest = ({ email, password }, cb) => async dispatch => {
    const auth = { username: email, password }
    const axiosData = { url: '/auth/sign-in', method: 'post', auth }
    dispatch(setAuthIsLoading({ isLoading: true }))
    try {
        const { data } = await axios(axiosData)
        dispatch(signInUser(data))
        cb && cb()
    } catch (error) {
        dispatch(signInUserError(requestErrorHandler(error)))
    }
    dispatch(setAuthIsLoading({ isLoading: false }))
}
