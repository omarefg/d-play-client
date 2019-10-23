import { REGISTER_USER } from '../actions/types'

const initialState = {
    error: '',
}

const user = (state = initialState, action) => {
    switch (action.type) {
    case REGISTER_USER: {
        if (action.error) {
            return {
                ...state,
                error: action.error,
            }
        }
        return {
            ...state,
        }
    }
    default: {
        return {
            ...state,
        }
    }
    }
}

export default user
