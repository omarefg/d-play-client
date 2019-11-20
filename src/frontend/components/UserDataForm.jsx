import React from 'react'
import { TextInput } from './TextInput'
import { Button } from './Button'

import styles from '../styles/components/UserDataForm.module.scss'

export const UserDataForm = props => {
    const {
        name,
        lastName,
        email,
        modifyUserHandler,
        isWatchingFormHandler,
        onSubmit,
    } = props

    return (
        <div className={styles['container']}>
            <div className={styles['form__title']}>
                <h2>Deseas modificar tus datos?</h2>
            </div>
            <form
                className={styles['form']}
                onSubmit={onSubmit}
            >
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
                <div className='btn__form'>
                    <Button
                        className={styles['btn__submit']}
                        type='submit'
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
