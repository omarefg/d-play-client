import {
    REGISTER_USER,
    DELETE_AUTH_ERROR_MESSAGE,
    SET_AUTH_IS_LOADING,
    SET_USER_IS_JUST_REGISTERED,
    SIGN_IN_USER,
    UPDATE_USER,
} from '../actions/types'

const initialState = {
    error: '',
    userIsJustRegistered: false,
    isLoading: false,
    user: null,
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
            userIsJustRegistered: true,
        }
    }
    case SIGN_IN_USER: {
        if (action.error) {
            return {
                ...state,
                error: action.payload.message,
            }
        }
        return {
            ...state,
            user: action.payload,
        }
    }
    case DELETE_AUTH_ERROR_MESSAGE: {
        return {
            ...state,
            error: '',
        }
    }
    case SET_AUTH_IS_LOADING: {
        return {
            ...state,
            isLoading: action.payload.isLoading,
        }
    }
    case SET_USER_IS_JUST_REGISTERED: {
        return {
            ...state,
            userIsJustRegistered: action.payload.userIsJustRegistered,
        }
    }
    case UPDATE_USER: {
        return {
            ...state,
            user: {
                ...state.user,
                ...action.payload.user,
            },
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
