import {
    MAIN_LOADER_HANDLER,
    DELETE_MAIN_ERROR_MESSAGE,
    SET_RECOMMENDATION_PAGE_DATA,
} from '../actions/types'

const initialState = {
    newReleases: { items: [] },
    featuredPlaylists: { items: [] },
    error: '',
    isLoading: false,
}

const main = (state = initialState, action) => {
    switch (action.type) {
    case SET_RECOMMENDATION_PAGE_DATA: {
        if (action.error) {
            return {
                ...state,
                error: action.payload.message,
            }
        }
        return {
            ...state,
            featuredPlaylists: action.payload.playlists,
            newReleases: action.payload.recommendations,
        }
    }
    case DELETE_MAIN_ERROR_MESSAGE: {
        return {
            ...state,
            error: '',
        }
    }
    case MAIN_LOADER_HANDLER: {
        return {
            ...state,
            isLoading: action.payload.isLoading,
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
