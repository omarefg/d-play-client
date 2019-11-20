const express = require('express')
const axios = require('axios')
const { config } = require('../../../config')
const { localErrorHandler } = require('../utils/local-error-handlers')

export const artist = app => {
    const router = express.Router()
    app.use('/server/artist', router)

    const { apiUrl } = config

    router.get('/:id/top-tracks', async (req, res, next) => {
        const { id } = req.params
        const { token } = req.cookies
        const { market } = req.query
        const request = payloadToken => axios({
            url: `${apiUrl}/api/artists/${id}/top-tracks?market=${market}`,
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
