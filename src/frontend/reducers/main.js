import {
    SET_MAIN_RECOMENDATION_IS_LOADING,
    SET_MAIN_GENRES_IS_LOADING,
    SET_MAIN_MY_LISTS_IS_LOADING,
    SET_MAIN_ERROR_MESSAGE,
    SET_MAIN_RECOMMENDATION_PAGE_DATA,
    SET_MAIN_GENRES_PLAYLISTS,
    SET_MAIN_GENRES_PLAYLISTS_INDEX,
    SET_MAIN_IS_CREATING_PLAYLIST,
    SET_MAIN_PLAYLIST_FORM_INPUT_VALUE,
    SET_MAIN_PLAYLIST_FORM_TEXT_AREA_VALUE,
    SET_MAIN_PLAYLIST_FORM_IMG_SRC,
    SET_MAIN_SEARCH_VALUE,
    SET_MAIN_SEARCH_RESULTS,
    SET_MAIN_SEARCH_IS_LOADING,
    SET_MAIN_GENRES_IS_LOADING_OBSERVER,
    SET_MAIN_IS_EDITING_PLAYLIST,
    SET_MAIN_PLAYLIST_FORM_ID,
    SET_MAIN_AUDIO_SEARCH_IS_LOADING,
} from '../actions/types'

const initialState = {
    recommendations: {
        newReleases: { items: [] },
        featuredPlaylists: { items: [] },
        isLoading: false,
    },
    genres: {
        genresPlaylists: [],
        genresPlaylistsIndex: 0,
        isLoading: false,
        isLoadingObserver: false,
    },
    myLists: {
        isCreatingList: false,
        isEditingList: false,
        creatingListTextInputValue: '',
        creatingListTextAreaValue: '',
        creatingListImageSrc: null,
        creatingListId: null,
        isLoading: false,
    },
    search: {
        searchValue: '',
        searchResults: {},
        isLoading: false,
    },
    audioSearch: {
        isLoading: false,
    },
    error: '',
}

const main = (state = initialState, action) => {
    switch (action.type) {
    case SET_MAIN_RECOMENDATION_IS_LOADING: {
        return {
            ...state,
            recommendations: {
                ...state.recommendations,
                isLoading: action.payload.isLoading,
            },
        }
    }
    case SET_MAIN_GENRES_IS_LOADING: {
        return {
            ...state,
            genres: {
                ...state.genres,
                isLoading: action.payload.isLoading,
            },
        }
    }
    case SET_MAIN_GENRES_IS_LOADING_OBSERVER: {
        return {
            ...state,
            genres: {
                ...state.genres,
                isLoadingObserver: action.payload.isLoadingObserver,
            },
        }
    }
    case SET_MAIN_MY_LISTS_IS_LOADING: {
        return {
            ...state,
            myLists: {
                ...state.myLists,
                isLoading: action.payload.isLoading,
            },
        }
    }
    case SET_MAIN_AUDIO_SEARCH_IS_LOADING: {
        return {
            ...state,
            audioSearch: {
                ...state.audioSearch,
                isLoading: action.payload.isLoading,
            },
        }
    }
    case SET_MAIN_ERROR_MESSAGE: {
        return {
            ...state,
            error: action.payload.message,
        }
    }
    case SET_MAIN_RECOMMENDATION_PAGE_DATA: {
        return {
            ...state,
            recommendations: {
                ...state.recommendations,
                featuredPlaylists: action.payload.playlists,
                newReleases: action.payload.recommendations,
            },
        }
    }
    case SET_MAIN_GENRES_PLAYLISTS: {
        return {
            ...state,
            genres: {
                ...state.genres,
                genresPlaylists: [...state.genres.genresPlaylists, ...action.payload.genresPlaylists.filter(playlist => playlist.items.length)],
            },
        }
    }
    case SET_MAIN_GENRES_PLAYLISTS_INDEX: {
        return {
            ...state,
            genres: {
                ...state.genres,
                genresPlaylistsIndex: action.payload.genresPlaylistsIndex,
            },
        }
    }
    case SET_MAIN_IS_CREATING_PLAYLIST: {
        return {
            ...state,
            myLists: {
                ...state.myLists,
                isCreatingList: action.payload.isCreatingList,
            },
        }
    }
    case SET_MAIN_PLAYLIST_FORM_INPUT_VALUE: {
        return {
            ...state,
            myLists: {
                ...state.myLists,
                creatingListTextInputValue: action.payload.creatingListTextInputValue,
            },
        }
    }
    case SET_MAIN_PLAYLIST_FORM_TEXT_AREA_VALUE: {
        return {
            ...state,
            myLists: {
                ...state.myLists,
                creatingListTextAreaValue: action.payload.creatingListTextAreaValue,
            },
        }
    }
    case SET_MAIN_PLAYLIST_FORM_IMG_SRC: {
        return {
            ...state,
            myLists: {
                ...state.myLists,
                creatingListImageSrc: action.payload.creatingListImageSrc,
            },
        }
    }
    case SET_MAIN_PLAYLIST_FORM_ID: {
        return {
            ...state,
            myLists: {
                ...state.myLists,
                creatingListId: action.payload.creatingListId,
            },
        }
    }
    case SET_MAIN_SEARCH_VALUE: {
        return {
            ...state,
            search: {
                ...state.search,
                searchValue: action.payload.searchValue,
            },
        }
    }
    case SET_MAIN_SEARCH_IS_LOADING: {
        return {
            ...state,
            search: {
                ...state.search,
                isLoading: action.payload.isLoading,
            },
        }
    }
    case SET_MAIN_SEARCH_RESULTS: {
        return {
            ...state,
            search: {
                ...state.search,
                searchResults: action.payload.searchResults,
            },
        }
    }
    case SET_MAIN_IS_EDITING_PLAYLIST: {
        return {
            ...state,
            myLists: {
                ...state.myLists,
                isEditingList: action.payload.isEditingList,
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

export default main
