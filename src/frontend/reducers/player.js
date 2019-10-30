import {
    SET_PLAYER_GROUP,
    SET_PLAYER_TRACK_INDEX,
    SET_PLAYER_TRACK_TIME_POSITION,
    SET_PLAYER_IS_LOADING,
    DELETE_PLAYER_ERROR_MESSAGE,
    SET_PLAYER_IS_PLAYING,
    SET_PLAYER_VOLUME,
} from '../actions/types'

const initialState = {
    playerGroup: { items: [], images: [{ url: null }] },
    playerTrackIndex: 0,
    trackTimePosition: 0,
    error: '',
    isLoading: false,
    playerIsPlaying: false,
    playerVolume: 100,
}

const main = (state = initialState, action) => {
    switch (action.type) {
    case SET_PLAYER_GROUP: {
        if (action.error) {
            return {
                ...state,
                error: action.payload.message,
            }
        }
        return {
            ...state,
            playerGroup: action.payload,
            playerTrackIndex: 0,
            playerIsPlaying: false,
        }
    }
    case SET_PLAYER_TRACK_INDEX: {
        return {
            ...state,
            playerTrackIndex: action.payload.playerTrackIndex,
        }
    }
    case SET_PLAYER_TRACK_TIME_POSITION: {
        return {
            ...state,
            trackTimePosition: action.payload.trackTimePosition,
        }
    }
    case SET_PLAYER_IS_LOADING: {
        return {
            ...state,
            isLoading: action.payload.isLoading,
        }
    }
    case DELETE_PLAYER_ERROR_MESSAGE: {
        return {
            ...state,
            error: '',
        }
    }
    case SET_PLAYER_IS_PLAYING: {
        return {
            ...state,
            playerIsPlaying: action.payload.playerIsPlaying,
        }
    }
    case SET_PLAYER_VOLUME: {
        return {
            ...state,
            playerVolume: action.payload.playerVolume,
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
