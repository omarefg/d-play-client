import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
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

export const Search = withRouter(connect(mapStateToProps, mapDispatchToProps)(props => {
    const {
        history,
        search,
        setMainSearchValue,
        location,
        setMainSearchResultsRequest,
        children,
    } = props

    const { pathname } = location

    const { searchValue } = search
    const { push } = history

    const [lastValue, setLastValue] = useState('')

    useEffect(() => {
        setMainSearchValue({ searchValue: '' })
    }, [pathname])

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
        <div className={styles['hear-and-search--container']}>
            <div className={styles['search__container']}>
                <SearchIcon/>
                <input
                    placeholder='Buscar...'
                    value={searchValue}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onKeyPress={onKeyPress}
                />
            </div>
            {children}
        </div>
    )
}))
