import React, { useState } from 'react'
import { TextInput, DateInput, Select } from '../components'
import data from '../db'

import styles from '../styles/pages/Register.module.scss'

let { countries } = data

countries = Object.keys(countries).map(key => {
    const country = countries[key]
    const value = country.code
    const label = `${country.emoji} ${country.name}`
    return { value, label }
})

export const Register = () => {
    console.log(countries)

    const [form, setForm] = useState({
        name: '',
        lastName: '',
    })

    const formHandler = event => setForm({
        ...form,
        [event.target.name]: event.target.value,
    })

    return (
        <div className={styles['register__container']}>
            <div
                className={styles['register__description']}
            />
            <form
                className={styles['register__form']}
                autoComplete='off'
            >
                <h3>¡Crea una cuenta!</h3>
                <TextInput
                    placeholder='Nombre'
                    id='name'
                    name='name'
                    onChange={formHandler}
                    value={form.name}
                />
                <TextInput
                    placeholder='Apellido'
                    id='lastName'
                    name='lastName'
                    onChange={formHandler}
                    value={form.lastName}
                />
                <DateInput/>
                <TextInput
                    placeholder='Email'
                    id='email'
                    name='email'
                    onChange={formHandler}
                    value={form.email}
                />
                <TextInput
                    placeholder='Nombre de usuario'
                    id='username'
                    name='username'
                    onChange={formHandler}
                    value={form.username}
                />
                <Select
                    options={countries}
                />
            </form>
        </div>
    )
}
