import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/components/Header.module.scss'
import userIcon from '../assets/Containers/Register/user-icon.png'

export const Header = props => {
    const { children } = props

    return (
        <header className={styles['header__container']}>
            <Link to='/'>
                <img
                    src='https://es.dplay.com/004914/static/resources/images/dplay-logo-white.svg'
                    alt='logo'
                />
            </Link>

            <div className={styles['header__childs-container']}>
                {children}
            </div>
            <Link to='/perfil-usuario'>
                <img
                    className={styles['header__user-icon']}
                    src={userIcon}
                    alt='icono-usuario'
                />
            </Link>
        </header>
    )
}
