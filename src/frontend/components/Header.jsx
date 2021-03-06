/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Search } from './Search'
import { ListItem } from './ListItem'
import { AudioSearchIcon } from '../icons'
import DplayLogo from '../assets/Logo.png'

import styles from '../styles/components/Header.module.scss'
import userIcon from '../assets/Containers/Register/user-icon.png'

const mapStateToProps = state => {
    return {
        user: state.auth.user,
    }
}

export const Header = withRouter(connect(mapStateToProps)(props => {
    const { location, user } = props
    const { pathname } = location

    if (user) {
        return (
            <header className={styles['header__container']}>
                <Link to='/'>
                    <img
                        className={styles['header__logo']}
                        src={DplayLogo}
                        alt='logo'
                    />
                </Link>

                <div className={styles['header__childs-container']}>
                    <div className={styles['header__search']}>
                        <Search>
                            <Link
                                to='/buscar-audio'
                            >
                                <AudioSearchIcon
                                    className={styles['header__search-audio--icon']}
                                />
                            </Link>
                        </Search>
                    </div>

                    <div className={styles['header__flex-grow']}>
                        <ul>
                            <ListItem
                                title='Recomendaciones'
                                to='/recomendaciones'
                                active={pathname === '/recomendaciones'}
                            />
                            <ListItem
                                title='Mis listas'
                                to='/mis-listas'
                                active={pathname === '/mis-listas'}
                            />
                            <ListItem
                                title='Géneros'
                                to='/generos'
                                active={pathname === '/generos'}
                            />
                        </ul>
                    </div>
                </div>
                <Link to='/perfil-usuario'>
                    <img
                        className={styles['header__user-icon']}
                        src={user.profilePic || userIcon}
                        alt='icono-usuario'
                    />
                </Link>
            </header>
        )
    }

    return null

}))
