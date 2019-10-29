const express = require('express')
const axios = require('axios')
const { config } = require('../../../config')

export const search = app => {
    const router = express.Router()
    app.use('/server/search', router)

    const { apiUrl } = config

    router.get('/', async (req, res, next) => {
        const { q } = req.query
        const { token } = req.cookies
        try {
            const { data: { data }, status } = await axios({
                url: `${apiUrl}/api/search?q=${q}&type=album,artist,playlist,track&limit=50&offset=0`,
                headers: { Authorization: `Bearer ${token}` },
                method: 'get',
            })

            res.status(status).json(data)
        } catch (error) {
            next(error)
        }
    })
}
