function errorTypeHandler(err, req, res, next) {
    if (err.response) {
        next(err.response)
    } else if (err.request) {
        next(err.request)
    } else {
        next(err)
    }
}

function errorHandler(err, req, res, next) {
    const { data } = err
    const { statusCode } = data
    res
        .status(statusCode)
        .json(data)
    next()
}

module.exports = {
    errorHandler,
    errorTypeHandler,
}
