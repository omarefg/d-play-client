import React from 'react'
import { connect } from 'react-redux'
import { InView } from 'react-intersection-observer'
import { setMainErrorMessage } from '../actions'

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
        isLoading,
        loadingRows,
        onObserverChange,
    } = props

    const closeSnackbarHandler = (_event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setMainErrorMessage({ message: '' })
    }

    return (
        <div
            className={styles['main-layout__container']}
        >
            <SnackbarNotification
                variant='error'
                message={error}
                onClose={closeSnackbarHandler}
                open={!!error}
            />
            <section className={styles['main-layout__flex-grow']}>
                {isLoading && loadingRows.map(key => {
                    return (
                        <CardsSection
                            key={key}
                            isLoading
                        />
                    )
                })}
                {!isLoading && children}
            </section>
            <InView
                as='div'
                onChange={onObserverChange}
            />
        </div>
    )
})
