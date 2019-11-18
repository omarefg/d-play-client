const express = require('express')
const axios = require('axios')
const { config } = require('../../../config')
const { localErrorHandler } = require('../utils/local-error-handlers')

export const recommendations = app => {
    const router = express.Router()
    app.use('/server/recommendations', router)

    const { apiUrl } = config

    router.get('/new-releases', async (req, res, next) => {
        const { limit, offset, country } = req.query
        const { token } = req.cookies
        const request = payloadToken => axios({
            url: `${apiUrl}/api/recommendations/new-releases?country=${country}&limit=${limit}&offset=${offset}`,
            headers: { Authorization: `Bearer ${payloadToken}` },
            method: 'get',
        })
        try {
            const { data: { data: { albums } }, status } = await request(token)
            res.status(status).json(albums)
        } catch (error) {
            const response = await localErrorHandler(req, res, next, error, request)
            if (response) {
                const { data: { data: { albums } }, status } = response
                res.status(status).json(albums)
            }
        }
    })

    router.get('/featured-playlists', async (req, res, next) => {
        const { limit, offset, country } = req.query
        const { token } = req.cookies
        const request = payloadToken => axios({
            url: `${apiUrl}/api/recommendations/featured-playlists?country=${country}&limit=${limit}&offset=${offset}`,
            headers: { Authorization: `Bearer ${payloadToken}` },
            method: 'get',
        })
        try {
            const { data: { data: { playlists } }, status } = await request(token)
            res.status(status).json(playlists)
        } catch (error) {
            const response = await localErrorHandler(req, res, next, error, request)
            if (response) {
                const { data: { data: { playlists } }, status } = response
                res.status(status).json(playlists)
            }
        }
    })

    router.get('/recommendation-page', async (req, res, next) => {
        const { country } = req.query
        const { token } = req.cookies
        const request = payloadToken => axios({
            url: `${apiUrl}/api/recommendations/recommendation-page?country=${country}`,
            headers: { Authorization: `Bearer ${payloadToken}` },
            method: 'get',
        })
        try {
            const { data: { data: { playlists, recommendations } }, status } = await request(token)
            res.status(status).json({ playlists, recommendations })
        } catch (error) {
            const response = await localErrorHandler(req, res, next, error, request)
            if (response) {
                const { data: { data: { playlists, recommendations } }, status } = response
                res.status(status).json({ playlists, recommendations })
            }
        }
    })

    router.get('/albums/:id/tracks', async (req, res, next) => {
        const { id } = req.params
        const { token } = req.cookies
        const request = payloadToken => axios({
            url: `${apiUrl}/api/albums/${id}/tracks?limit=50&offset=0`,
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

    router.get('/playlists/:id/tracks', async (req, res, next) => {
        const { id } = req.params
        const { token } = req.cookies
        const request = payloadToken => axios({
            url: `${apiUrl}/api/recommendations/playlists/${id}/tracks?limit=50&offset=0`,
            headers: { Authorization: `Bearer ${payloadToken}` },
            method: 'get',
        })
        try {
            const { data: { data }, status } = await request(token)
            data.items = data.items.map(item => item.track)
            res.status(status).json(data)
        } catch (error) {
            const response = await localErrorHandler(req, res, next, error, request)
            if (response) {
                const { data: { data }, status } = response
                data.items = data.items.map(item => item.track)
                res.status(status).json(data)
            }
        }
    })
}
