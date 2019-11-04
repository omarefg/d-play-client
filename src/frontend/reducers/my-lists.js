import {
    SET_MY_LISTS,
    MY_LISTS_LOADER_HANDLER,
    DELETE_MY_LISTS_ERROR_MESSAGE,
    IS_CREATING_LIST_HANDLER,
    SET_PLAYLIST_FORM_INPUT_VALUE,
    SET_PLAYLIST_FORM_TEXT_AREA_VALUE,
    SET_PLAYLIST_FORM_IMG_SRC,
} from '../actions/types'

const initialState = {
    myLists: [],
    error: '',
    isLoading: false,
    isCreatingList: false,
    creatingListTextInputValue: '',
    creatingListTextAreaValue: '',
    creatingListImageSrc: null,
}

const myLists = (state = initialState, action) => {
    switch (action.type) {
    case SET_MY_LISTS: {
        if (action.error) {
            return {
                ...state,
                error: action.payload.message,
            }
        }
        return {
            ...state,
            myLists: action.payload.myLists,
        }
    }
    case DELETE_MY_LISTS_ERROR_MESSAGE: {
        return {
            ...state,
            error: '',
        }
    }
    case MY_LISTS_LOADER_HANDLER: {
        return {
            ...state,
            isLoading: action.payload.isLoading,
        }
    }
    case IS_CREATING_LIST_HANDLER: {
        return {
            ...state,
            isCreatingList: action.payload.isCreatingList,
        }
    }
    case SET_PLAYLIST_FORM_INPUT_VALUE: {
        return {
            ...state,
            creatingListTextInputValue: action.payload.creatingListTextInputValue,
        }
    }
    case SET_PLAYLIST_FORM_TEXT_AREA_VALUE: {
        return {
            ...state,
            creatingListTextAreaValue: action.payload.creatingListTextAreaValue,
        }
    }
    case SET_PLAYLIST_FORM_IMG_SRC: {
        return {
            ...state,
            creatingListImageSrc: action.payload.creatingListImageSrc,
        }
    }
    default: {
        return {
            ...state,
        }
    }
    }
}

export default myLists
