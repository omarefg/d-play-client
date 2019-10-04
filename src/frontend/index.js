import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import { ThemeProvider } from '@material-ui/styles'
import App from './Router'
import store from './store'
import theme from './styles/lib/theme'

const history = createBrowserHistory()

// import * as serviceWorker from './utils/service-workers/serviceWorker'

if (typeof window !== 'undefined') {
    hydrate(
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Router history={history}>
                    <App/>
                </Router>
            </Provider>
        </ThemeProvider>,
        document.getElementById('root'),
    )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
