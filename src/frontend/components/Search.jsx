import React, { useState } from 'react'
import { getSearchData } from '../utils/requests'
import { SearchIcon } from '../icons'

import styles from '../styles/components/Search.module.scss'

export const Search = props => {
    const [searchValue, setSearchValue] = useState('')

    const searchValueHandler = event => {
        const { value } = event.target
        setSearchValue(value)
        getSearchData(value)
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }

    return (
        <div className={styles['search__container']}>
            <SearchIcon/>
            <input
                placeholder='Buscar...'
                value={searchValue}
                onChange={searchValueHandler}
            />
        </div>
    )
}
