const express = require('express')
const axios = require('axios')
const { config } = require('../../../config')
const { localErrorHandler } = require('../utils/local-error-handlers')

export const categories = app => {
    const router = express.Router()
    app.use('/server/categories', router)

    const { apiUrl } = config

    router.get('/', async (req, res, next) => {
        const { offset, country, limit } = req.query
        const { token } = req.cookies
        const request = payloadToken => axios({
            url: `${apiUrl}/api/categories?country=${country}&limit=${limit}&offset=${offset}`,
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

    router.get('/:id/playlists', async (req, res, next) => {
        const { id } = req.params
        const { country } = req.query
        const { token } = req.cookies
        const request = payloadToken => axios({
            url: `${apiUrl}/api/categories/${id}/playlists?country=${country}`,
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
