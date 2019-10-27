import axios from 'axios'
import { config } from '../../../config'

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
            user = data.data
        }
    } catch (error) {
        if (req.url !== '/inicia-sesion') {
            res.redirect('/inicia-sesion')
        }
        console.log(error)
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
