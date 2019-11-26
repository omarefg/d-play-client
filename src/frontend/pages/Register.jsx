import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerUserRequest, deleteAuthErrorMessage } from '../actions'
import {
    TextInput,
    DateInput,
    Select,
    Button,
    SnackbarNotification,
    ButtonLoader,
    RedirectBoundary,
} from '../components'
import data from '../../../db'

import styles from '../styles/pages/RegisterAndLogin.module.scss'

let { countries } = data

countries = Object.keys(countries).map(key => {
    const country = countries[key]
    const value = country.code
    const label = `${country.emoji} ${country.name}`
    return { value, label, orderBy: country.name }
}).sort((a, b) => {
    const aValue = a.orderBy.toUpperCase()
    const bValue = b.orderBy.toUpperCase()
    if (aValue < bValue) return -1
    if (aValue > bValue) return 1
    return 0
})

const mapStateToProps = state => {
    return {
        ...state.auth,
    }
}

const mapDispatchToProps = {
    registerUserRequest,
    deleteAuthErrorMessage,
}

export const Register = connect(mapStateToProps, mapDispatchToProps)(props => {
    const {
        registerUserRequest,
        deleteAuthErrorMessage,
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
        registerUserRequest(form, () => history.push('inicia-sesion'))
    }

    const closeSnackbarHandler = (_event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        deleteAuthErrorMessage()
    }

    const countrySelectValue = countries.find(country => country.code === form.country)

    return (
        <RedirectBoundary inverse>
            <div className={styles['container']}>
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
                        {isLoading ? <ButtonLoader/> : 'Regístrate'}
                    </Button>
                    <p className={styles['redirect']}>
                    ¿Ya tienes cuenta?&nbsp;
                        <Link to='/inicia-sesion'>Inicia sesión</Link>
                    </p>
                </form>
            </div>
        </RedirectBoundary>
    )
})
