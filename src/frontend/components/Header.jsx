import React from 'react'
import styles from '../styles/components/Header.module.scss'

export const Header = props => {
    const { children } = props

    return (
        <header className={styles['header__container']}>
            <img
                src='https://es.dplay.com/004914/static/resources/images/dplay-logo-white.svg'
                alt='logo'
            />
            <div>
                {children}
            </div>
        </header>
    )
}
