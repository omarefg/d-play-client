import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { setMainSearchValue, setMainSearchResultsRequest } from '../actions'
import { SearchIcon } from '../icons'

import styles from '../styles/components/Search.module.scss'

const mapStateToProps = state => {
    return {
        ...state.main,
        user: state.auth.user,
    }
}

const mapDispatchToProps = {
    setMainSearchValue,
    setMainSearchResultsRequest,
}

export const Search = connect(mapStateToProps, mapDispatchToProps)(props => {
    const {
        history,
        search,
        setMainSearchValue,
        pathname,
        setMainSearchResultsRequest,
    } = props

    const { searchValue } = search
    const { push } = history

    const searchInput = useRef(null)

    const [lastValue, setLastValue] = useState('')

    useEffect(() => {
        const { current } = searchInput
        if (pathname === '/buscar' && current) {
            current.focus()
            return
        }
        setMainSearchValue({ searchValue: '' })
    }, [])

    const onFocus = () => {
        push('/buscar')
    }

    const onChange = event => {
        const { value: searchValue } = event.target
        setMainSearchValue({ searchValue })
    }

    const onBlur = event => {
        const { value: query } = event.target
        if (query !== lastValue) {
            setLastValue(query)
            query && setMainSearchResultsRequest({ query })
        }
    }

    const onKeyPress = event => {
        const { key, target: { value: query } } = event
        if (key === 'Enter' && query !== lastValue) {
            setLastValue(query)
            query && setMainSearchResultsRequest({ query })
        }
    }

    return (
        <div className={styles['search__container']}>
            <SearchIcon/>
            <input
                placeholder='Buscar...'
                value={searchValue}
                onChange={onChange}
                onFocus={onFocus}
                ref={searchInput}
                onBlur={onBlur}
                onKeyPress={onKeyPress}
            />
        </div>
    )
})
