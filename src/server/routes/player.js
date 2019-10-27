const express = require('express')
const axios = require('axios')
const { config } = require('../../../config')

export const player = app => {
    const router = express.Router()
    app.use('/player', router)

    const { apiUrl } = config

    router.get('playing-group/albums/:id/tracks', async (req, res, next) => {
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
}
