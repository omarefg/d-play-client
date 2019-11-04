const boom = require('@hapi/boom')

function errorTypeHandler(error, req, res, next) {
    if (error.response) {
        next(error.response)
    } else if (error.request) {
        next(error.request)
    } else {
        next(error)
    }
}

function errorHandler(error, req, res, next) {
    console.log(error)
    const { status, data } = error
    res.status(status).json(data)
    next()
}

function notFoundHandler(req, res) {
    const { output: { statusCode, payload } } = boom.notFound()

    res.status(statusCode).json(payload)
}

module.exports = {
    errorHandler,
    errorTypeHandler,
    notFoundHandler,
}
