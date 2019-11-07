import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserIsJustRegistered, signInUserRequest, deleteAuthErrorMessage } from '../actions'
import { TextInput, Button, Modal, ButtonLoader, SnackbarNotification, RedirectBoundary } from '../components'

import styles from '../styles/pages/RegisterAndLogin.module.scss'
import google from '../assets/Containers/Register/icons8-google-50.png'
import twitter from '../assets/Containers/Register/icons8-twitter-52.png'

const mapStateToProps = state => {
    return {
        ...state.auth,
    }
}

const mapDispatchToProps = {
    setUserIsJustRegistered,
    signInUserRequest,
    deleteAuthErrorMessage,
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(props => {
    const {
        userIsJustRegistered,
        setUserIsJustRegistered,
        signInUserRequest,
        history,
        isLoading,
        error,
        deleteAuthErrorMessage,
    } = props

    const [form, setForm] = useState({ email: '', password: '' })

    const modalCloseHandler = () => setUserIsJustRegistered({ userIsJustRegistered: false })

    const formHandler = event => setForm({
        ...form,
        [event.target.name]: event.target.value,
    })

    const onSubmitHandler = event => {
        event.preventDefault()
        signInUserRequest(form, () => history.push('/'))
    }

    const closeSnackbarHandler = (_event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        deleteAuthErrorMessage()
    }

    return (
        <RedirectBoundary inverse>
            <div className={styles['container']}>
                <Modal
                    open={userIsJustRegistered}
                    onClose={modalCloseHandler}
                    title='¡Felicidades, ya casi eres un dplayer!'
                    description=' Sólo falta que confirmes tu correo, para ello ve a tu bandeja de entrada y busca el increíble correo de confirmación que te enviamos.'
                />
                <SnackbarNotification
                    variant='error'
                    message={error}
                    onClose={closeSnackbarHandler}
                    open={!!error}
                />
                <div
                    className={styles['description']}
                />
                <form
                    className={styles['form']}
                    autoComplete='off'
                    onSubmit={onSubmitHandler}
                >
                    <h3 className={styles['title']}>¡Inicia sesión y que suene la música!</h3>
                    <div className={styles['social-media']}>
                        <Button className='btn--social-media'>
                            <img src={google} alt='google-social-media'/>
                        Inicia Sesión con Google
                        </Button>
                        <Button className='btn--social-media'>
                            <img src={twitter} alt='twitter-social-media'/>
                        Inicia Sesión con Twitter
                        </Button>
                    </div>
                    <TextInput
                        placeholder='Email'
                        id='email'
                        name='email'
                        onChange={formHandler}
                        value={form.email}
                        required
                    />
                    <TextInput
                        placeholder='Contraseña'
                        id='password'
                        name='password'
                        onChange={formHandler}
                        value={form.password}
                        type='password'
                        required
                    />
                    <Button
                        type='submit'
                        disabled={isLoading}
                    >
                        {isLoading ? <ButtonLoader/> : 'Inicia Sesión'}
                    </Button>
                    <p className={styles['redirect']}>
                    ¿No tienes cuenta?&nbsp;
                        <Link to='registrate'>Regístrate</Link>
                    </p>
                </form>
            </div>
        </RedirectBoundary>
    )
})
