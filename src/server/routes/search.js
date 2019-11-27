const express = require('express')
const axios = require('axios')
const { config } = require('../../../config')
const { localErrorHandler } = require('../utils/local-error-handlers')

export const search = app => {
    const router = express.Router()
    app.use('/server/search', router)

    const { apiUrl } = config

    router.get('/', async (req, res, next) => {
        const { q } = req.query
        const { token } = req.cookies
        const request = payloadToken => axios({
            url: `${apiUrl}/api/search?q=${q}&type=album,artist,playlist,track&limit=50&offset=0`,
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

    router.post('/audio-search', async (req, res, next) => {
        const { sample } = req.body
        const { token } = req.cookies
        const request = payloadToken => axios({
            url: `${apiUrl}/api/search/audio-search`,
            headers: { Authorization: `Bearer ${payloadToken}` },
            method: 'post',
            data: { sample },
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
