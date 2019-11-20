import { combineReducers } from 'redux'
import auth from './auth'
import main from './main'
import player from './player'
import user from './user'

const reducer = combineReducers({
    auth,
    main,
    player,
    user,
})

export default reducer
