import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TextInput, Button } from '../components'

import styles from '../styles/pages/RegisterAndLogin.module.scss'
import google from '../assets/Containers/Register/icons8-google-50.png'
import twitter from '../assets/Containers/Register/icons8-twitter-52.png'

export const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' })

    const formHandler = event => setForm({
        ...form,
        [event.target.name]: event.target.value,
    })

    return (
        <div className={styles['container']}>
            <div
                className={styles['description']}
            />
            <form
                className={styles['form']}
                autoComplete='off'
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
                <Button type='submit'>
                    Inicia Sesión
                </Button>
                <p className={styles['redirect']}>
                    ¿No tienes cuenta?&nbsp;
                    <Link to='registrate'>Regístrate</Link>
                </p>
            </form>
        </div>
    )
}
