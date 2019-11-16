import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, Footer, UserDataForm } from '../components'

import styles from '../styles/pages/UserData.module.scss'

const mapStateToProps = state => ({
    ...state,
})

export const UserData = connect(mapStateToProps)(props => {
    const { auth: { user: userGeneralState } } = props
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

    return (
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
            <Footer/>
        </div>
    )
})
