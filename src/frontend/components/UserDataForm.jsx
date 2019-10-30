import React from 'react'
import TextInput from './TextInput'

import styles from '../styles/components/UserDataForm.module.scss'

export const UserDataForm = () => (
    <div className={styles['container']}>
        <div className={styles['form__title']}>
            <h2>Deseas modificar tus datos?</h2>
        </div>
        <form className={styles['form']} action=''>
            <input className={styles['input']} type='text' placeholder='&#128100;  Nombre' required/>
            <input className={styles['input']} type='text' placeholder='&#128100;  Apellido' required/>

            <input className={styles['input']} type='email' placeholder='&#9993;  E-mail' required/>

            <div className={styles['form__title']}>
                <h3>Tambien puedes cambiar tu contraseña</h3>
            </div>
            <input className={styles['input']} type='password' placeholder='&#9919;  Contraseña Actual' required/>
            <input className={styles['input']} type='password' placeholder='&#9919;  Nueva Contraseña' required/>
            <input className={styles['input']} type='password' placeholder='&#9919;  Confirmación Contraseña' required/>
            <div className='btn__form'>
                <input className={styles['btn__submit']} type='submit' value='Guardar cambios'/>
            </div>
        </form>
    </div>
)
