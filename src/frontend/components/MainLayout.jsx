import React from 'react'
import { connect } from 'react-redux'
import { setMainErrorMessage } from '../actions'
import { Header } from './Header'
import { Search } from './Search'
import { ListItem } from './ListItem'
import { Player } from './Player'
import { SnackbarNotification } from './SnackbarNotification'
import { CardsSection } from './CardsSection'

import styles from '../styles/components/MainLayout.module.scss'

const mapStateToProps = state => {
    return {
        ...state.main,
        user: state.auth.user,
    }
}

const mapDispatchToProps = {
    setMainErrorMessage,
}

export const MainLayout = connect(mapStateToProps, mapDispatchToProps)(props => {
    const {
        error,
        setMainErrorMessage,
        children,
        location,
        isLoading,
        loadingRows,
        history,
    } = props

    const { pathname } = location
    const closeSnackbarHandler = (_event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setMainErrorMessage({ message: '' })
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
                <Search
                    history={history}
                    pathname={pathname}
                />
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
                {isLoading && loadingRows.map(key => {
                    return (
                        <CardsSection
                            key={key}
                            isLoading
                        />
                    )
                })}
                {children}
            </section>
            <Player/>
        </div>
    )
})
