import { combineReducers } from 'redux'
import auth from './auth'
import main from './main'
import player from './player'
import genres from './genres'

const reducer = combineReducers({
    auth,
    main,
    player,
    genres,
})

export default reducer
