import { SET_USER_ERROR_MESSAGE } from './types'
import { signInUser, updateUser } from './auth'
import { errorDispatcher } from '../utils/error-handler'

export const setUserErrorMessage = payload => ({
    type: SET_USER_ERROR_MESSAGE,
    payload,
})

export const modifyUserRequest = payload => async dispatch => {
    try {
        await axios({
            url: `/server/users/${id}`,
            method: 'put',
            data: payload,
        })
        dispatch(updateUser({ user: payload }))
    } catch (error) {
        const unauthorizedErrorCalback = _err => dispatch(signInUser(null))
        const errorHandler = error => dispatch(setUserErrorMessage(error))
        errorDispatcher(error, unauthorizedErrorCalback, errorHandler)
    }
}
