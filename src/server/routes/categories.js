const express = require('express')
const axios = require('axios')
const { config } = require('../../../config')

export const categories = app => {
    const router = express.Router()
    app.use('/server/categories', router)

    const { apiUrl } = config

    router.get('/', async (req, res, next) => {
        const { offset, country } = req.query
        const { token } = req.cookies
        try {
            const { data: { data }, status } = await axios({
                url: `${apiUrl}/api/categories?country=${country}&limit=10&offset=${offset}`,
                headers: { Authorization: `Bearer ${token}` },
                method: 'get',
            })

            res.status(status).json(data)
        } catch (error) {
            next(error)
        }
    })

    router.get('/:id/playlists', async (req, res, next) => {
        const { id } = req.params
        const { token } = req.cookies
        try {
            const { data: { data }, status } = await axios({
                url: `${apiUrl}/api/categories/${id}/playlists`,
                headers: { Authorization: `Bearer ${token}` },
                method: 'get',
            })

            res.status(status).json(data)
        } catch (error) {
            next(error)
        }
    })
}
