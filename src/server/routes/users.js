const express = require('express')
const axios = require('axios')
const { config } = require('../../../config')
const { localErrorHandler } = require('../utils/local-error-handlers')

export const users = app => {
    const router = express.Router()
    app.use('/server/users', router)

    const { apiUrl } = config

    router.put('/:id', async (req, res, next) => {
        const { id } = req.params
        const { body: user } = req
        const { token } = req.cookies
        const request = payloadToken => axios({
            url: `${apiUrl}/api/users/${id}`,
            headers: { Authorization: `Bearer ${payloadToken}` },
            method: 'put',
            data: user,
        })
        try {
            const { data: { data }, status } = await request(token)
            res.status(status).json(data)
        } catch (error) {
            const response = await localErrorHandler(req, res, next, error, request)
            if (response) {
                const { data: { data }, status } = response
                res.status(status).json(data)
            }
        }
    })
}
