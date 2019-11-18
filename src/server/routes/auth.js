const express = require('express')
const passport = require('passport')
const axios = require('axios')
const { config } = require('../../../config')

require('../utils/auth/strategies/basic')

export const auth = app => {
    const router = express.Router()
    app.use('/server/auth', router)

    // const { apiUrl, nodeEnv } = config
    const { apiUrl } = config

    // const isDev = nodeEnv === 'development'

    router.post('/sign-in', (req, res, next) => {
        passport.authenticate('basic', (error, data) => {
            try {
                if (error || !data) {
                    return next(error)
                }
                req.login(data, { session: false }, error => {
                    if (error) { return next(error) }
                    const { token, user, refreshToken } = data
                    // const cookieConfig = { httpOnly: !isDev, secure: !isDev }
                    const cookieConfig = { httpOnly: false, secure: false }
                    res.cookie('token', token, cookieConfig)
                    res.cookie('refreshToken', refreshToken, { ...cookieConfig, maxAge: 1000 * 60 * 60 * 24 * 7 })
                    res.cookie('id', user.id, cookieConfig)
                    res.status(200).json(user)
                })
            } catch (error) {
                next(error)
            }
        })(req, res, next)
    })

    router.post('/sign-up', async (req, res, next) => {
        const { body: user } = req
        try {
            const { data, status } = await axios({
                url: `${apiUrl}/api/auth/sign-up`,
                method: 'post',
                data: user,
            })

            res.status(status).json(data)
        } catch (error) {
            next(error)
        }
    })
}
