import axios from 'axios'
import { config } from '../../../config'
import { localErrorHandler } from './local-error-handlers'

export const setInitialState = async (req, res) => {
    const { token, id } = req.cookies
    let user = null
    try {
        if (token) {
            const { data } = await axios({
                url: `${config.apiUrl}/api/users/${id}`,
                headers: { Authorization: `Bearer ${token}` },
                method: 'get',
            })
            user = { ...data.data, id: data.data._id }
        }
    } catch (error) {
        const cb = payloadToken => {
            return axios({
                url: `${config.apiUrl}/api/users/${id}`,
                headers: { Authorization: `Bearer ${payloadToken}` },
                method: 'get',
            })
        }
        const response = await localErrorHandler(req, res, null, error, cb)
        if (response) {
            const { data } = response
            user = data.data
        }
    }

    return {
        auth: {
            error: '',
            userIsJustRegistered: false,
            isLoading: false,
            user,
        },
    }
}
