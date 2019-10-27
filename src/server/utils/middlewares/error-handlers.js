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

function unauthorizedErrorHandler(error, _req, res, next) {
    const { data } = error
    let { statusCode } = data

    if (!statusCode) {
        statusCode = error.status
    }

    if (statusCode === 401) {
        res.redirect('/inicia-sesion')
    } else {
        next(error)
    }
}

function errorHandler(error, req, res, next) {
    console.log(error)
    const { data } = error
    const { statusCode } = data
    res
        .status(statusCode)
        .json(data)
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
    unauthorizedErrorHandler,
}
