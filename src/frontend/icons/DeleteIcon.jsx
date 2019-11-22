import React from 'react'
import classNames from 'classnames/bind'

import styles from '../styles/icons/Icons.module.scss'

export const DeleteIcon = props => {
    const { className, onClick } = props

    const cx = classNames.bind(styles)

    const icon = cx({
        'icon__container--general': true,
        [className]: className,
    })

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            x='0'
            y='0'
            enableBackground='new 0 0 52 52'
            version='1.1'
            viewBox='0 0 52 52'
            xmlSpace='preserve'
            className={icon}
            onClick={onClick}
        >
            <path d='M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z'/>
            <path d='M35.707 16.293a.999.999 0 00-1.414 0L26 24.586l-8.293-8.293a.999.999 0 10-1.414 1.414L24.586 26l-8.293 8.293a.999.999 0 101.414 1.414L26 27.414l8.293 8.293a.997.997 0 001.414 0 .999.999 0 000-1.414L27.414 26l8.293-8.293a.999.999 0 000-1.414z'/>
        </svg>
    )
}
