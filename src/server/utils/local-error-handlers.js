const axios = require('axios')
// const { config: { apiUrl, nodeEnv } } = require('../../../config')
const { config: { apiUrl } } = require('../../../config')

// const isDev = nodeEnv === 'development'

function errorTypeHandler(error) {
    if (error.response) {
        return error.response
    } if (error.request) {
        return error.request
    }
    return error
}

async function tokenExpiredHandler(req, res, next, cb) {
    const { refreshToken } = req.cookies
    try {
        const { data: { token } } = await axios({
            url: `${apiUrl}/api/auth/token`,
            headers: { Authorization: `Bearer ${refreshToken}` },
            method: 'get',
        })
        // const cookieConfig = { httpOnly: !isDev, secure: !isDev }
        const cookieConfig = { httpOnly: false, secure: false }
        res.cookie('token', token, cookieConfig)
        const response = await cb(token)
        return response
    } catch (error) {
        next && next(error)
    }
}

async function localErrorHandler(req, res, next, error, cb) {
    const err = errorTypeHandler(error)
    const { status } = err
    if (status === 401) {
        const response = await tokenExpiredHandler(req, res, next, cb)
        return response
    }
    next && next(error)
}

module.exports = {
    localErrorHandler,
}
