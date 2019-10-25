export const requestErrorHandler = error => {
    if (error.response) {
        const { data } = error.response
        return data
    }
    if (error.request) {
        return error.request
    }
    return error
}
