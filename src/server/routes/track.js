const express = require('express')
const axios = require('axios')
const { config } = require('../../../config')
const { localErrorHandler } = require('../utils/local-error-handlers')

export const track = app => {
    const router = express.Router()
    app.use('/server/track', router)

    const { apiUrl } = config

    router.get('/:id', async (req, res, next) => {
        const { id } = req.params
        const { token } = req.cookies
        const request = payloadToken => axios({
            url: `${apiUrl}/api/tracks/${id}`,
            headers: { Authorization: `Bearer ${payloadToken}` },
            method: 'get',
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
