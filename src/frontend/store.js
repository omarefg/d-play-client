import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

const preloadedState = window.__PRELOADED_STATE__

let enhancer

if (process.env.NODE_ENV === 'production') {
    enhancer = compose
} else {
    enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const store = createStore(reducer, preloadedState, enhancer(applyMiddleware(thunk)))

export default store
