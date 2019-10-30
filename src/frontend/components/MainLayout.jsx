import React from 'react'
import { connect } from 'react-redux'
import { deleteMainErrorMessage } from '../actions'
import { Header } from './Header'
import { Search } from './Search'
import { ListItem } from './ListItem'
import { Player } from './Player'
import { SnackbarNotification } from './SnackbarNotification'

import styles from '../styles/components/MainLayout.module.scss'

const mapStateToProps = state => {
    return {
        ...state.main,
        user: state.auth.user,
    }
}

const mapDispatchToProps = {
    deleteMainErrorMessage,
}

export const MainLayout = connect(mapStateToProps, mapDispatchToProps)(props => {
    const { error, deleteMainErrorMessage, children, pathname } = props
    const closeSnackbarHandler = (_event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        deleteMainErrorMessage()
    }

    return (
        <div className={styles['main-layout__container']}>
            <SnackbarNotification
                variant='error'
                message={error}
                onClose={closeSnackbarHandler}
                open={!!error}
            />
            <Header>
                <Search/>
                <div className={styles['main-layout__flex-grow']}/>
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
            </Header>
            <section className={styles['main-layout__flex-grow']}>
                {children}
            </section>
            <Player/>
        </div>
    )
})
