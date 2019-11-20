import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, UserDataForm, RedirectBoundary } from '../components'
import { signInUser } from '../actions'
import { deleteCookie } from '../utils/session'

import styles from '../styles/pages/UserData.module.scss'

const mapStateToProps = state => ({
    ...state,
})

const mapDispatchToProps = {
    signInUser,
}

export const UserData = connect(mapStateToProps, mapDispatchToProps)(props => {
    const { auth: { user: userGeneralState }, signInUser } = props
    const [isWatchingForm, setIsWatchingForm] = useState(false)
    const [user, modifyUser] = useState(userGeneralState)
    const { profilePic, name, lastName, email } = user

    const modifyUserHandler = event => {
        const { name, value } = event.target
        modifyUser({
            ...user,
            [name]: value,
        })
    }

    const isWatchingFormHandler = () => {
        modifyUser({ ...userGeneralState })
        setIsWatchingForm(!isWatchingForm)
    }

    const logout = () => {
        signInUser(null)
        deleteCookie('token')
        deleteCookie('refreshToken')
    }

    return (
        <RedirectBoundary>
            <div className={styles['user--data-container']}>
                <div className={styles['user--data-container-profile']}>
                    <img
                        className={styles['img-profile']}
                        src={profilePic}
                        alt='user-form'
                    />
                    {!isWatchingForm ? (
                        <>
                            <h1 className={styles.nameuser}>{`${name} ${lastName}`}</h1>
                            <Button
                                className='btn--user-data'
                                onClick={isWatchingFormHandler}
                            >
                            Modificar mi Perfil
                            </Button>
                            <Button
                                className='btn--user-data'
                            >
                            Mi Suscripción
                            </Button>
                            <Button
                                className='btn--user-data'
                                onClick={logout}
                            >
                            Cerrar Sesión
                            </Button>
                        </>
                    ) : (
                        <UserDataForm
                            name={name}
                            lastName={lastName}
                            email={email}
                            modifyUserHandler={modifyUserHandler}
                            isWatchingFormHandler={isWatchingFormHandler}
                        />
                    )}
                </div>
            </div>
        </RedirectBoundary>
    )
})
