import axios from 'axios'
import { REGISTER_USER } from './types'

export const registerUser = payload => ({
    type: REGISTER_USER,
    payload,
})

export const registerUserError = error => ({
    type: REGISTER_USER,
    payload: new Error(error),
    error: true,
})

export const registerRequest = payload => async dispatch => {
    axios.post('/auth/sign-up', payload)
        .then(({ data }) => dispatch(registerUser(data)))
        .catch(error => dispatch(registerUserError(error)))
}
