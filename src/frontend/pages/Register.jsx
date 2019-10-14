import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TextInput, DateInput, Select, Button } from '../components'
import data from '../../../db'

import styles from '../styles/pages/RegisterAndLogin.module.scss'
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

    const countrySelectValue = countries.find(country => country.code === form.country)

    return (
        <div className={styles['container']}>
            <div
                className={styles['description']}
            />
            <form
                className={styles['form']}
                autoComplete='off'
            >
                <h3 className={styles['title']}>¡Crea una cuenta y que suene la música!</h3>
                <div className={styles['social-media']}>
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
                    Regístrate
                </Button>
                <p className={styles['redirect']}>
                    ¿Ya tienes cuenta?&nbsp;
                    <Link to='/inicia-sesion'>Inicia sesión</Link>
                </p>
            </form>
        </div>
    )
}
