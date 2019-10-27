import axios from 'axios'
import {
    MAIN_LOADER_HANDLER,
    DELETE_MAIN_ERROR_MESSAGE,
    SET_RECOMMENDATION_PAGE_DATA,
} from './types'
import { requestErrorHandler } from '../utils/error-handler'

export const handleMainLoader = payload => ({
    type: MAIN_LOADER_HANDLER,
    payload,
})
export const deleteMainErrorMessage = () => ({
    type: DELETE_MAIN_ERROR_MESSAGE,
})

export const setRecommendationPageData = payload => ({
    type: SET_RECOMMENDATION_PAGE_DATA,
    payload,
})

export const setRecommendationPageDataError = payload => ({
    type: SET_RECOMMENDATION_PAGE_DATA,
    payload,
    error: true,
})

export const setRecommendationPageDataRequest = ({ country }) => async dispatch => {
    dispatch(handleMainLoader({ isLoading: true }))
    try {
        const { data } = await axios.get(`/recommendations/recommendation-page?country=${country}`)
        dispatch(setRecommendationPageData(data))
    } catch (error) {
        dispatch(setRecommendationPageDataError(requestErrorHandler(error)))
    }
    dispatch(handleMainLoader({ isLoading: false }))
}
