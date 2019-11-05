import { combineReducers } from 'redux'
import auth from './auth'
import main from './main'
import player from './player'

const reducer = combineReducers({
    auth,
    main,
    player,
})

export default reducer
