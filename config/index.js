require('dotenv').config()

const config = {
    nodeEnv: process.env.NODE_ENV,
    port: process.env.PORT || 3200,
    apiUrl: process.env.API_URL,
}

module.exports = { config }
