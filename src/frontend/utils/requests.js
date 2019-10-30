import axios from 'axios'

export const getSearchData = async query => {
    try {
        const { data } = await axios.get(`/search?q=${query}`)
        return data
    } catch (error) {
        throw new Error(error)
    }
}
