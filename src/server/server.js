import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import helmet from 'helmet'
import { main } from './routes'
import config from './config'
import webpackConfig from '../../webpack.config'

const { nodeEnv, port } = config

const app = express()
app.use(express.json())
app.use(helmet())
app.use(express.static(`${__dirname}/public`))

if (nodeEnv === 'development') {
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

app.get('*', main)

app.listen(port, error => {
    if (error) {
        console.log(error)
    }
    console.log(`Server running on http://localhost:${port}`)
})
