import axios from 'axios'
import { REGISTER_USER, DELETE_REGISTER_USER_ERROR_MESSAGE, LOADER_HANDLER, JUST_REGISTERED_HANDLER } from './types'
import { requestErrorHandler } from '../utils/error-handler'

export const registerUser = payload => ({
    type: REGISTER_USER,
    payload,
})

export const registerUserError = payload => ({
    type: REGISTER_USER,
    payload,
    error: true,
})

export const handleLoader = payload => ({
    type: LOADER_HANDLER,
    payload,
})

export const registerRequest = (payload, cb) => async dispatch => {
    dispatch(handleLoader({ isLoading: true }))
    try {
        await axios.post('/auth/sign-up', payload)
    } catch (error) {
        dispatch(registerUserError(requestErrorHandler(error)))
    }
    dispatch(handleLoader({ isLoading: false }))
    dispatch(registerUser())
    cb && cb()
}

export const deleteRegisterUserErrorMessage = () => ({
    type: DELETE_REGISTER_USER_ERROR_MESSAGE,
})

export const justRegisteredHandler = payload => ({
    type: JUST_REGISTERED_HANDLER,
    payload,
})
