import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

const initialState = {}

let enhancer
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancer = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
} else {
    enhancer = compose(applyMiddleware(thunk))
}

const store = createStore(reducer, initialState, enhancer)

export default store
