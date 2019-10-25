const express = require('express')
const axios = require('axios')
const { config } = require('../../../config')

export const auth = app => {
    const router = express.Router()
    app.use('/auth', router)

    const { apiUrl } = config

    router.post(
        '/sign-up',
        async (req, res, next) => {
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
        },
    )
}
