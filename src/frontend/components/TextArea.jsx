import React from 'react'
import classNames from 'classnames/bind'

import styles from '../styles/components/TextArea.module.scss'

export const TextArea = props => {

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
    } = props

    const cx = classNames.bind(styles)

    const container = cx({
        'text-area__container': true,
        [containerClassName]: containerClassName,
    })

    const label = cx({
        'text-area__label': true,
        'text-area__label--collected': value,
        [labelClassName]: labelClassName,
    })

    const textarea = cx({
        'text-area__text': true,
        [inputClassName]: inputClassName,
    })

    return (
        <div className={container}>
            <textarea
                className={textarea}
                id={id}
                value={value}
                onChange={onChange}
                name={name}
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
