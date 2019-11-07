import {
    SET_GENRES_PLAYLISTS,
    SET_GENRES_PLAYLISTS_INDEX,
    GENRES_LOADER_HANDLER,
    DELETE_GENRES_ERROR_MESSAGE,
} from '../actions/types'

const initialState = {
    genresPlaylists: [],
    genresPlaylistsIndex: 0,
    error: '',
    isLoading: false,
}

const genres = (state = initialState, action) => {
    switch (action.type) {
    case SET_GENRES_PLAYLISTS: {
        if (action.error) {
            return {
                ...state,
                error: action.payload.message,
            }
        }
        return {
            ...state,
            genresPlaylists: action.payload.genresPlaylists.filter(playlist => playlist.items.length),
        }
    }
    case SET_GENRES_PLAYLISTS_INDEX: {
        return {
            ...state,
            genresPlaylistsIndex: action.payload.genresPlaylistsIndex,
        }
    }
    case DELETE_GENRES_ERROR_MESSAGE: {
        return {
            ...state,
            error: '',
        }
    }
    case GENRES_LOADER_HANDLER: {
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

export default genres
