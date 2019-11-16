import React from 'react'
import { TextInput } from './TextInput'
import { Button } from './Button'

import styles from '../styles/components/UserDataForm.module.scss'

export const UserDataForm = props => {
    const { name, lastName, email, modifyUserHandler, isWatchingFormHandler } = props
    return (
        <div className={styles['container']}>
            <div className={styles['form__title']}>
                <h2>Deseas modificar tus datos?</h2>
            </div>
            <form className={styles['form']}>
                <TextInput
                    className={styles['input']}
                    placeholder='Nombre'
                    value={name}
                    required
                    name='name'
                    onChange={modifyUserHandler}
                />
                <TextInput
                    className={styles['input']}
                    placeholder='Apellido'
                    required
                    value={lastName}
                    name='lastName'
                    onChange={modifyUserHandler}
                />

                <TextInput
                    className={styles['input']}
                    placeholder='Correo electrónico'
                    required
                    value={email}
                    type='email'
                    name='email'
                    onChange={modifyUserHandler}
                />

                <div className={styles['form__title']}>
                    <h3>Tambien puedes cambiar tu contraseña</h3>
                </div>
                <TextInput
                    className={styles['input']}
                    type='password'
                    placeholder='Contraseña Actual'
                    required
                />
                <TextInput
                    className={styles['input']}
                    type='password'
                    placeholder='Nueva Contraseña'
                    required
                />
                <TextInput
                    className={styles['input']}
                    type='password'
                    placeholder='Confirmamos tu nueva Contraseña'
                    required
                />
                <div className='btn__form'>
                    <Button
                        className={styles['btn__submit']}
                    >
                        Guardar Cambios
                    </Button>
                    <Button
                        className={styles['btn__submit']}
                        onClick={isWatchingFormHandler}
                    >
                        Cancelar
                    </Button>
                </div>
            </form>
        </div>
    )
}
