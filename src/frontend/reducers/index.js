import { combineReducers } from 'redux'
import auth from './auth'
import main from './main'
import player from './player'
import genres from './genres'
import myLists from './my-lists'

const reducer = combineReducers({
    auth,
    main,
    player,
    genres,
    myLists,
})

export default reducer
