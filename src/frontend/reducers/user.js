import {
    SET_USER_ERROR_MESSAGE,
} from '../actions/types'

const initialState = {
    error: '',
}

const main = (state = initialState, action) => {
    switch (action.type) {
    case SET_USER_ERROR_MESSAGE: {
        return {
            ...state,
            error: action.payload.message,
        }
    }
    default: {
        return {
            ...state,
        }
    }
    }
}

export default main
