import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, UserDataForm, RedirectBoundary, SnackbarNotification } from '../components'
import { modifyUserRequest, setUserErrorMessage } from '../actions'

import styles from '../styles/pages/UserData.module.scss'

const mapStateToProps = state => ({
    ...state,
})

export const UserData = connect(mapStateToProps)(props => {
    const { auth: { user: userGeneralState }, user: { error } } = props
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

    const onFileInputChange = event => {
        const { files } = event.target
        const file = files[0]
        const { type } = file
        if (type.includes('image')) {
            const FR = new FileReader()
            FR.addEventListener('load', fileReaderEvent => {
                const { result } = fileReaderEvent.target
                modifyUser({
                    ...user,
                    profilePic: result,
                })
            })
            FR.readAsDataURL(file)
        }
    }

    const isWatchingFormHandler = () => {
        modifyUser({ ...userGeneralState })
        setIsWatchingForm(!isWatchingForm)
    }

    const logout = () => {
        window.location.href = '/server/auth/sign-out'
    }

    const onSubmit = event => {
        event.preventDefault()
        modifyUserRequest(user)
    }

    const closeSnackbarHandler = (_event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setUserErrorMessage({ message: '' })
    }

    return (
        <RedirectBoundary>
            <SnackbarNotification
                variant='error'
                message={error}
                onClose={closeSnackbarHandler}
                open={!!error}
            />
            <div className={styles['user--data-container']}>
                <div className={styles['user--data-container-profile']}>
                    <label
                        htmlFor='user-date__profile-pic'
                    >
                        <img
                            className={styles['img-profile']}
                            src={profilePic}
                            alt='user-form'
                        />
                        {isWatchingForm && (
                            <input
                                type='file'
                                id='user-date__profile-pic'
                                className={styles['user__date-profile-pic-intpu']}
                                onChange={onFileInputChange}
                            />
                        )}
                    </label>
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
                            onSubmit={onSubmit}
                        />
                    )}
                </div>
            </div>
        </RedirectBoundary>
    )
})
