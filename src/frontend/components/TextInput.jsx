import React, { useState } from 'react'
import classNames from 'classnames/bind'

import styles from '../styles/components/TextInput.module.scss'

export const TextInput = props => {
    const [isPassword] = useState(false)

    const {
        id,
        placeholder,
        onChange,
        value,
        name,
        containerClassName,
        labelClassName,
        inputClassName,
        required,
        type,
    } = props

    const cx = classNames.bind(styles)

    const container = cx({
        'text-input__container': true,
        [containerClassName]: containerClassName,
    })

    const label = cx({
        'text-input__label': true,
        'text-input__label--collected': value,
        [labelClassName]: labelClassName,
    })

    const input = cx({
        'text-input__input': true,
        [inputClassName]: inputClassName,
    })

    return (
        <div className={container}>
            <input
                className={input}
                id={id}
                value={value}
                onChange={onChange}
                name={name}
                type={type || isPassword ? 'password' : 'text'}
                required={required}
            />
            <label
                className={label}
                htmlFor={id}
            >
                {placeholder}
            </label>
        </div>
    )
}
