import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheets } from '@material-ui/styles'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { StaticRouter } from 'react-router'
import { renderRoutes } from 'react-router-config'
import { serverRoutes } from '../../frontend/routes'
import reducer from '../../frontend/reducers'
import { render } from '../render'

export const main = async (req, res, next) => {
    const sheets = new ServerStyleSheets()
    try {
        const initialState = {}
        const store = createStore(reducer, initialState)
        const html = renderToString(
            sheets.collect(
                <Provider store={store}>
                    <StaticRouter
                        location={req.url}
                        context={{}}
                    >
                        {renderRoutes(serverRoutes())}
                    </StaticRouter>
                </Provider>,
            ),
        )
        const preloadedState = store.getState()
        const css = sheets.toString()
        res.send(render(html, preloadedState, css))
    } catch (error) {
        next(error)
    }
}
