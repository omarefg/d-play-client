import {
    REGISTER_USER,
    DELETE_REGISTER_USER_ERROR_MESSAGE,
    LOADER_HANDLER,
    JUST_REGISTERED_HANDLER,
} from '../actions/types'

const initialState = {
    error: '',
    justRegistered: false,
    isLoading: false,
}

const user = (state = initialState, action) => {
    switch (action.type) {
    case REGISTER_USER: {
        if (action.error) {
            return {
                ...state,
                error: action.payload.message,
            }
        }
        return {
            ...state,
            justRegistered: true,
        }
    }
    case DELETE_REGISTER_USER_ERROR_MESSAGE: {
        return {
            ...state,
            error: '',
        }
    }
    case LOADER_HANDLER: {
        return {
            ...state,
            isLoading: action.payload.isLoading,
        }
    }
    case JUST_REGISTERED_HANDLER: {
        return {
            ...state,
            justRegistered: action.payload.justRegistered,
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
