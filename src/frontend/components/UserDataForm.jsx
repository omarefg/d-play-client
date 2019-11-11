import React from 'react'
import { TextInput } from './TextInput'
import { Button } from './Button'

import styles from '../styles/components/UserDataForm.module.scss'

export const UserDataForm = () => (
    <div className={styles['container']}>
        <div className={styles['form__title']}>
            <h2>Deseas modificar tus datos?</h2>
        </div>
        <form className={styles['form']} action=''>

            <TextInput
                className={styles['input']}
                placeholder='&#128100; Nombre'
                required
            />
            <TextInput
                className={styles['input']}
                placeholder='&#128100; Apellido'
                required
            />

            <TextInput
                className={styles['input']}
                type='email'
                placeholder='&#9993;  E-mail'
                required
            />

            <div className={styles['form__title']}>
                <h3>Tambien puedes cambiar tu contraseña</h3>
            </div>
            <TextInput
                className={styles['input']}
                type='password'
                placeholder='&#9919;  Contraseña Actual'
                required
            />
            <TextInput
                className={styles['input']}
                type='password'
                placeholder='&#9919;  Nueva Contraseña'
                required
            />
            <TextInput
                className={styles['input']}
                type='password'
                placeholder='&#9919;  Confirmación Contraseña'
                required
            />
            <div className='btn__form'>
                <Button className={styles['btn__submit']}>
                    Guardar Cambios
                </Button>

            </div>
        </form>
    </div>
)
