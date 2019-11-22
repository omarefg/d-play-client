import {
    SET_USER_MESSAGE,
    SET_USER_VARIANT,
    SET_USER_IS_LOADING,
    SET_USER_IS_LOADING_EMAIL,
    SET_USER_IS_LOADING_PASSWORD,
} from '../actions/types'

const initialState = {
    message: '',
    variant: '',
    isLoading: false,
    isLoadingEmail: false,
    isLoadingPassword: false,
}

const main = (state = initialState, action) => {
    switch (action.type) {
    case SET_USER_MESSAGE: {
        return {
            ...state,
            message: action.payload.message,
        }
    }
    case SET_USER_VARIANT: {
        return {
            ...state,
            variant: action.payload.variant,
        }
    }
    case SET_USER_IS_LOADING: {
        return {
            ...state,
            isLoading: action.payload.isLoading,
        }
    }
    case SET_USER_IS_LOADING_EMAIL: {
        return {
            ...state,
            isLoadingEmail: action.payload.isLoadingEmail,
        }
    }
    case SET_USER_IS_LOADING_PASSWORD: {
        return {
            ...state,
            isLoadingPassword: action.payload.isLoadingPassword,
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
