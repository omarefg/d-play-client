const express = require('express')
const axios = require('axios')
const { config } = require('../../../config')

export const recommendations = app => {
    const router = express.Router()
    app.use('/recommendations', router)

    const { apiUrl } = config

    router.get('/new-releases', async (req, res, next) => {
        const { limit, offset, country } = req.query
        const { token } = req.cookies
        try {
            const { data: { data: { albums } }, status } = await axios({
                url: `${apiUrl}/api/recommendations/new-releases?country=${country}&limit=${limit}&offset=${offset}`,
                headers: { Authorization: `Bearer ${token}` },
                method: 'get',
            })

            res.status(status).json(albums)
        } catch (error) {
            next(error)
        }
    })

    router.get('/featured-playlists', async (req, res, next) => {
        const { limit, offset, country } = req.query
        const { token } = req.cookies
        try {
            const { data: { data: { playlists } }, status } = await axios({
                url: `${apiUrl}/api/recommendations/featured-playlists?country=${country}&limit=${limit}&offset=${offset}`,
                headers: { Authorization: `Bearer ${token}` },
                method: 'get',
            })

            res.status(status).json(playlists)
        } catch (error) {
            next(error)
        }
    })

    router.get('/recommendation-page', async (req, res, next) => {
        const { country } = req.query
        const { token } = req.cookies
        try {
            const { data: { data: { playlists, recommendations } }, status } = await axios({
                url: `${apiUrl}/api/recommendations/recommendation-page?country=${country}`,
                headers: { Authorization: `Bearer ${token}` },
                method: 'get',
            })

            res.status(status).json({ playlists, recommendations })
        } catch (error) {
            next(error)
        }
    })

    router.get('/albums/:id/tracks', async (req, res, next) => {
        const { id } = req.params
        const { token } = req.cookies
        try {
            const { data: { data }, status } = await axios({
                url: `${apiUrl}/api/albums/${id}/tracks?limit=50&offset=0`,
                headers: { Authorization: `Bearer ${token}` },
                method: 'get',
            })

            res.status(status).json(data)
        } catch (error) {
            next(error)
        }
    })

    router.get('/playlists/:id/tracks', async (req, res, next) => {
        const { id } = req.params
        const { token } = req.cookies
        try {
            const { data: { data }, status } = await axios({
                url: `${apiUrl}/api/recommendations/playlists/${id}/tracks?limit=50&offset=0`,
                headers: { Authorization: `Bearer ${token}` },
                method: 'get',
            })

            data.items = data.items.map(item => item.track)

            res.status(status).json(data)
        } catch (error) {
            next(error)
        }
    })
}
