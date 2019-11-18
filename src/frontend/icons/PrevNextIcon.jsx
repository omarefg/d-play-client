import React from 'react'
import classNames from 'classnames/bind'

import styles from '../styles/icons/Icons.module.scss'

export const PrevNextIcon = props => {
    const {
        className,
        onClick,
    } = props

    const cx = classNames.bind(styles)

    const icon = cx({
        'icon__container--general': true,
        [className]: className,
    })

    return (
        <svg
            className={icon}
            x='0px'
            y='0px'
            onClick={onClick}
            viewBox='0 0 21.346 14.98'
        >
            <path
                d='M.159 15.684l10.112-7.115a.374.374 0 01.59.306v6.657l9.9-6.959a.375.375 0 01.59.307V23.1a.375.375 0 01-.2.333.382.382 0 01-.173.042.376.376 0 01-.215-.068l-9.9-6.959v6.657a.374.374 0 01-.59.306L.159 16.3a.374.374 0 010-.612z'
                transform='translate(0 -8.5)'
            />
        </svg>
    )
}
