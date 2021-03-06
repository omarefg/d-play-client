import axios from 'axios'
import {
    REGISTER_USER,
    DELETE_AUTH_ERROR_MESSAGE,
    SET_AUTH_IS_LOADING,
    SET_USER_IS_JUST_REGISTERED,
    SIGN_IN_USER,
    UPDATE_USER,
} from './types'
import { errorDispatcher } from '../utils/error-handler'

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
export const updateUser = payload => ({
    payload,
    type: UPDATE_USER,
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
        await axios.post('/server/auth/sign-up', payload)
        dispatch(registerUser())
        cb && cb()
    } catch (error) {
        const errorHandler = error => dispatch(registerUserError(error))
        errorDispatcher(error, errorHandler, errorHandler)
    }
    dispatch(setAuthIsLoading({ isLoading: false }))
}
export const signInUserRequest = ({ email, password }, cb) => async dispatch => {
    const auth = { username: email, password }
    const axiosData = { url: '/server/auth/sign-in', method: 'post', auth }
    dispatch(setAuthIsLoading({ isLoading: true }))
    try {
        const { data } = await axios(axiosData)
        dispatch(signInUser({ ...data, id: data.id }))
        cb && cb()
    } catch (error) {
        const errorHandler = error => dispatch(signInUserError(error))
        errorDispatcher(error, errorHandler, errorHandler)
    }
    dispatch(setAuthIsLoading({ isLoading: false }))
}
