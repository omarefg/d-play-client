import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Search } from './Search'
import { ListItem } from './ListItem'

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
                        src='https://es.dplay.com/004914/static/resources/images/dplay-logo-white.svg'
                        alt='logo'
                    />
                </Link>

                <div className={styles['header__childs-container']}>
                    <Search/>
                    <div className={styles['header__flex-grow']}/>
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

    return null

}))
