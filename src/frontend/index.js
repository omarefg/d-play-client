import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import App from './Router'
import store from './store'

const history = createBrowserHistory()

// import * as serviceWorker from './utils/service-workers/serviceWorker'

if (typeof window !== 'undefined') {
    hydrate(
        <Provider store={store}>
            <Router history={history}>
                <App/>
            </Router>
        </Provider>,
        document.getElementById('root'),
    )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
