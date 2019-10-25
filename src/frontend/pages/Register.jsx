import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerRequest, deleteRegisterUserErrorMessage } from '../actions'
import { TextInput, DateInput, Select, Button, SnackbarNotification, Loader } from '../components'
import data from '../../../db'

import styles from '../styles/pages/RegisterAndLogin.module.scss'

let { countries } = data

countries = Object.keys(countries).map(key => {
    const country = countries[key]
    const value = country.code
    const label = `${country.emoji} ${country.name}`
    return { value, label }
})

const mapStateToProps = state => {
    return {
        ...state.user,
    }
}

const mapDispatchToProps = {
    registerRequest,
    deleteRegisterUserErrorMessage,
}

export const Register = connect(mapStateToProps, mapDispatchToProps)(props => {
    const {
        registerRequest,
        deleteRegisterUserErrorMessage,
        error,
        isLoading,
        history,
    } = props

    const [form, setForm] = useState({
        name: '',
        lastName: '',
        birthdate: new Date(),
        email: '',
        country: '',
        password: '',
    })

    const formHandler = event => setForm({
        ...form,
        [event.target.name]: event.target.value,
    })

    const birthdateHandler = birthdate => setForm({ ...form, birthdate })

    const countryHandler = value => {
        const country = value ? value.value : ''
        setForm({ ...form, country })
    }

    const submit = event => {
        event.preventDefault()
        registerRequest(form, () => history.push('inicia-sesion'))
    }

    const closeHandler = (_event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        deleteRegisterUserErrorMessage()
    }

    const countrySelectValue = countries.find(country => country.code === form.country)

    return (
        <div className={styles['container']}>
            <SnackbarNotification
                variant='error'
                message={error}
                onClose={closeHandler}
                open={!!error}
            />
            <div
                className={styles['description']}
            />
            <form
                className={styles['form']}
                autoComplete='off'
                onSubmit={submit}
            >
                <h3 className={styles['title']}>¡Crea una cuenta y que suene la música!</h3>
                <TextInput
                    placeholder='Nombre'
                    id='name'
                    name='name'
                    onChange={formHandler}
                    value={form.name}
                    required
                />
                <TextInput
                    placeholder='Apellido'
                    id='lastName'
                    name='lastName'
                    onChange={formHandler}
                    value={form.lastName}
                    required
                />
                <DateInput
                    label='Fecha de nacimiento'
                    onChange={birthdateHandler}
                    value={form.birthdate}
                    disableFuture
                    required
                />
                <TextInput
                    placeholder='Email'
                    id='email'
                    name='email'
                    onChange={formHandler}
                    value={form.email}
                    required
                />
                <Select
                    options={countries}
                    onChange={countryHandler}
                    value={countrySelectValue}
                    required
                />
                <TextInput
                    placeholder='Contraseña'
                    id='password'
                    name='password'
                    onChange={formHandler}
                    value={form.password}
                    required
                    type='password'
                />
                <Button type='submit'>
                    {isLoading ? (
                        <>
                            <span
                                role='img'
                                aria-label='magic'
                            >
                                Estamos haciendo magia✨
                            </span>
                            <Loader
                                type='Audio'
                                size={30}
                                color='white'
                            />
                        </>
                    ) : 'Regístrate'}
                </Button>
                <p className={styles['redirect']}>
                    ¿Ya tienes cuenta?&nbsp;
                    <Link to='/inicia-sesion'>Inicia sesión</Link>
                </p>
            </form>
        </div>
    )
})
