import React, { useState } from 'react'
import { connect } from 'react-redux'
import { TextInput } from './TextInput'
import { Button } from './Button'
import { Accordion } from './Accordion'
import { ButtonLoader } from './ButtonLoader'
import { setUserMessage, setUserVariant, modifyUserEmailRequest, modifyUserPasswordRequest } from '../actions'

import styles from '../styles/components/UserDataForm.module.scss'

const mapStateToProps = state => ({
    ...state,
})

const mapDispatchToProps = {
    setUserMessage,
    setUserVariant,
    modifyUserEmailRequest,
    modifyUserPasswordRequest,
}

export const UserDataForm = connect(mapStateToProps, mapDispatchToProps)(props => {
    const {
        name,
        lastName,
        email,
        modifyUserHandler,
        isWatchingFormHandler,
        onSubmit,
        setUserMessage,
        setUserVariant,
        modifyUserEmailRequest,
        modifyUserPasswordRequest,
        user: {
            isLoading,
            isLoadingEmail,
            isLoadingPassword,
        },
        auth: { user },
    } = props

    const userid = user ? user.id : null

    const [newEmail, setNewEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const newEmailHandler = event => setNewEmail(event.target.value)
    const confirmEmailHandler = event => setConfirmEmail(event.target.value)

    const emailSubmitHandler = event => {
        event.preventDefault()
        if (newEmail !== confirmEmail) {
            setUserVariant({ variant: 'warning' })
            setUserMessage({ message: 'Los correos no coinciden' })
            return
        }
        modifyUserEmailRequest({ id: userid, email: confirmEmail })
    }

    const passwordHandler = event => setPassword(event.target.value)
    const newPasswordHandler = event => setNewPassword(event.target.value)
    const confirmPasswordHandler = event => setConfirmPassword(event.target.value)

    const passwordSubmitHandler = event => {
        event.preventDefault()
        if (newPassword !== confirmPassword) {
            setUserVariant({ variant: 'warning' })
            setUserMessage({ message: 'Las contraseñas no coinciden' })
            return
        }
        if (!newPassword || !confirmPassword) {
            setUserVariant({ variant: 'warning' })
            setUserMessage({ message: 'Debes elegir una contraseña' })
            return
        }
        if (newPassword === password) {
            setUserVariant({ variant: 'warning' })
            setUserMessage({ message: 'La nueva contraseña no puede ser igual que la anterior' })
            return
        }
        modifyUserPasswordRequest({ id: userid, newP: newPassword, oldP: password })
    }

    return (
        <div className={styles['container']}>
            <div className={styles['form__title']}>
                <h2>¿Deseas modificar tus datos?</h2>
            </div>
            <form
                className={styles['form']}
                onSubmit={onSubmit}
                id='user-data-form__principal-form'
            >
                <TextInput
                    className={styles['input']}
                    placeholder='Nombre'
                    value={name}
                    required
                    name='name'
                    onChange={modifyUserHandler}
                    id='user-form__user-name'
                />
                <TextInput
                    className={styles['input']}
                    placeholder='Apellido'
                    required
                    value={lastName}
                    name='lastName'
                    onChange={modifyUserHandler}
                    id='user-form__user-last-name'
                />
            </form>
            <div
                className={styles['form']}
            >
                <Accordion
                    title='Actualizar correo'
                >
                    <form
                        onSubmit={emailSubmitHandler}
                    >
                        <TextInput
                            className={styles['input']}
                            placeholder='Correo actual'
                            value={email}
                            type='email'
                            name='email'
                            onChange={modifyUserHandler}
                            containerClassName={styles['user-data-form__accordion-input']}
                            disabled
                            id='user-form__user-email'
                        />
                        <TextInput
                            className={styles['input']}
                            placeholder='Nuevo correo'
                            required
                            value={newEmail}
                            type='email'
                            onChange={newEmailHandler}
                            containerClassName={styles['user-data-form__accordion-input']}
                            id='user-form__user-new-email'
                        />
                        <TextInput
                            className={styles['input']}
                            placeholder='Confirmar correo'
                            required
                            value={confirmEmail}
                            type='email'
                            onChange={confirmEmailHandler}
                            containerClassName={styles['user-data-form__accordion-input']}
                            id='user-form__user-confirm-email'
                        />

                        <Button
                            className={styles['btn__submit']}
                            type='submit'
                        >
                            {isLoadingEmail ? <ButtonLoader/> : 'Confirmar'}
                        </Button>
                    </form>
                </Accordion>
                <Accordion
                    title='Cambiar contraseña'
                >
                    <form
                        onSubmit={passwordSubmitHandler}
                    >
                        <TextInput
                            className={styles['input']}
                            placeholder='Contraseña actual'
                            value={password}
                            type='password'
                            onChange={passwordHandler}
                            containerClassName={styles['user-data-form__accordion-input']}
                            id='user-form__user-password'
                        />
                        <TextInput
                            className={styles['input']}
                            placeholder='Nueva contraseña'
                            value={newPassword}
                            type='password'
                            onChange={newPasswordHandler}
                            containerClassName={styles['user-data-form__accordion-input']}
                            id='user-form__user-new-password'
                        />
                        <TextInput
                            className={styles['input']}
                            placeholder='Confirmar contraseña'
                            value={confirmPassword}
                            type='password'
                            onChange={confirmPasswordHandler}
                            containerClassName={styles['user-data-form__accordion-input']}
                            id='user-form__user-confirm-new-password'
                        />
                        <Button
                            className={styles['btn__submit']}
                            type='submit'
                        >
                            {isLoadingPassword ? <ButtonLoader/> : 'Confirmar'}
                        </Button>
                    </form>
                </Accordion>
                <Button
                    className={styles['btn__submit']}
                    type='submit'
                    form='user-data-form__principal-form'
                >
                    {isLoading ? <ButtonLoader/> : 'Guardar Cambios'}
                </Button>
                <Button
                    className={styles['btn__submit']}
                    onClick={isWatchingFormHandler}
                >
                        Cancelar
                </Button>
            </div>
        </div>
    )
})
