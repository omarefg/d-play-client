const requestErrorHandler = error => {
    if (error.response) {
        const { data } = error.response
        return data
    }
    if (error.request) {
        return error.request
    }
    return error
}

export const errorDispatcher = (error, unauthorizedCallback, otherErrorCallback) => {
    const err = requestErrorHandler(error)
    const { statusCode } = err
    if (statusCode === 401) {
        unauthorizedCallback(err)
    } else {
        otherErrorCallback(err)
    }
}
