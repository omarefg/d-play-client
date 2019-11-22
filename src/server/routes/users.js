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

    router.get(
        '/:id/update-email/:email', async (req, res, next) => {
            const { id, email } = req.params
            const { token } = req.cookies
            const request = payloadToken => axios({
                url: `${apiUrl}/api/users/${id}/update-email/${email}`,
                headers: { Authorization: `Bearer ${payloadToken}` },
                method: 'get',
            })
            try {
                const { status } = await request(token)
                res.status(status).send()
            } catch (error) {
                const response = await localErrorHandler(req, res, next, error, request)
                if (response) {
                    const { status } = response
                    res.status(status).send()
                }
            }
        },
    )

    router.put(
        '/:id/update-password', async (req, res, next) => {
            const { id } = req.params
            const { token } = req.cookies
            const { oldP, newP } = req.body
            const request = payloadToken => axios({
                url: `${apiUrl}/api/users/${id}/update-password`,
                headers: { Authorization: `Bearer ${payloadToken}` },
                method: 'put',
                data: { oldP, newP },
            })
            try {
                await request(token)
                res.status(200).send()
            } catch (error) {
                await localErrorHandler(req, res, next, error, request)
            }
        },
    )
}
