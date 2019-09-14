import React, { useState } from 'react'
import { TextInput, DateInput, Select, Button } from '../components'
import data from '../db'

import styles from '../styles/pages/Register.module.scss'
import google from '../assets/Containers/Register/icons8-google-50.png'
import twitter from '../assets/Containers/Register/icons8-twitter-52.png'

let { countries } = data

countries = Object.keys(countries).map(key => {
    const country = countries[key]
    const value = country.code
    const label = `${country.emoji} ${country.name}`
    return { value, label }
})

export const Register = () => {
    const [form, setForm] = useState({
        name: '',
        lastName: '',
        birthdate: new Date(),
        email: '',
        username: '',
        country: '',
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

    const countrySelectValue = countries.find(country => country.code === form.country)

    return (
        <div className={styles['register__container']}>
            <div
                className={styles['register__description']}
            />
            <form
                className={styles['register__form']}
                autoComplete='off'
            >
                <h3 className={styles['register__title']}>¡Crea una cuenta y que suene la música!</h3>
                <div className={styles['register__social-media']}>
                    <Button className='btn--social-media'>
                        <img src={google} alt='google-social-media'/>
                        Regístrate con Google
                    </Button>
                    <Button className='btn--social-media'>
                        <img src={twitter} alt='twitter-social-media'/>
                        Regístrate con Twitter
                    </Button>
                </div>
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
                <TextInput
                    placeholder='Nombre de usuario'
                    id='username'
                    name='username'
                    onChange={formHandler}
                    value={form.username}
                    required
                />
                <Select
                    options={countries}
                    onChange={countryHandler}
                    value={countrySelectValue}
                    required
                />
                <Button type='submit'>
                    Regístrate
                </Button>
                <p className={styles['register__change-to-login']}>
                    {'¿Ya tienes cuenta? '}
                    <span>Inicia sesión</span>
                </p>
            </form>
        </div>
    )
}
