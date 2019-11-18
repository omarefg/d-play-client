require('dotenv').config()

const config = {
    nodeEnv: process.env.NODE_ENV,
    port: process.env.PORT || 3200,
    apiUrl: process.env.API_URL,
    clientUrl: process.env.CLIENT_URL,
    clientUrlWithoutUrl: process.env.CLIENT_URL_WITHOUT_PORT,
    apiUrlWithoutUrl: process.env.API_URL_WITHOUT_PORT,
    sessionSecret: process.env.SESSION_SECRET,
}

module.exports = { config }
