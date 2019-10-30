import React from 'react'
import { SearchIcon } from '../icons'
import styles from '../styles/components/Search.module.scss'

export const Search = props => {
    return (
        <div className={styles['search__container']}>
            <SearchIcon/>
            <input
                placeholder='Buscar...'
            />
        </div>
    )
}
