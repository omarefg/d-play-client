import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import https from 'https'
import fs from 'fs'
import { main, auth, recommendations, player, search, categories, users } from './routes'
import { config } from '../../config'
import webpackConfig from '../../webpack.config'

const {
    errorHandler,
    errorTypeHandler,
    notFoundHandler,
} = require('./utils/middlewares/error-handlers')

const { nodeEnv, port, clientUrlWithoutUrl, securePort } = config

const isDev = nodeEnv === 'development'

const app = express()
app.use(express.json({ limit: '50mb' }))
app.use(helmet())
app.use(cookieParser())
app.use(passport.initialize())
app.use(passport.session({ secret: config.sessionSecret }))
app.use(express.static(`${__dirname}/public`))

if (isDev) {
    console.log('Loading development config')
    const compiler = webpack(webpackConfig)
    const serverConfig = {
        contentBase: `http://localhost:${port}`,
        port,
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        historyApiFallback: true,
        stats: { colors: true },
    }

    app.use(webpackDevMiddleware(compiler, serverConfig))
    app.use(webpackHotMiddleware(compiler))
} else {
    console.log('Loading production config')
    app.use(helmet.permittedCrossDomainPolicies())
    app.disable('x-powered-by')
}

//Routes
auth(app)
recommendations(app)
player(app)
search(app)
categories(app)
users(app)

app.get('*', main)

// Catch 404
app.use(notFoundHandler)

// Errors Middlewares
app.use(errorTypeHandler)
app.use(errorHandler)

if (isDev) {
    app.listen(port, error => {
        if (error) {
            console.log(error)
        }
        console.log(`Listening ${clientUrlWithoutUrl}:${port}`)
    })
} else {
    const httpApp = express()
    const httpRouter = express.Router()
    httpApp.use('*', httpRouter)
    httpRouter.get('*', (req, res) => {
        let host = req.get('Host')
        host = host.replace(/:\d+$/, `:${app.get('port')}`)
        const destination = ['https://', host, req.url].join('')
        return res.redirect(destination)
    })
    const httpServer = http.createServer(httpApp)
    httpServer.listen(port, error => {
        if (error) {
            console.log(error)
        }
        console.log(`Listening ${clientUrlWithoutUrl}:${port}`)
    })

    https.createServer({
        key: fs.readFileSync('/etc/letsencrypt/live/dplay.cf/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/dplay.cf/fullchain.pem'),
    }, app).listen(securePort, error => {
        if (error) {
            console.log(error)
        }
        console.log(`Listening ${clientUrlWithoutUrl}:${securePort}`)
    })
}
