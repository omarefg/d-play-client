import React from 'react'
import classNames from 'classnames/bind'

import styles from '../styles/icons/Icons.module.scss'

export const SadFaceIcon = props => {
    const { className, onClick, title } = props

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
            enableBackground='new 0 0 47 47'
            version='1.1'
            viewBox='0 0 47 47'
            xmlSpace='preserve'
            className={icon}
            onClick={onClick}
        >
            <title>{title || 'Esta canción no está disponible'}</title>
            <path
                fill='#FBD971'
                d='M23.5 5c-2.013 0-3.953.3-5.796.829.501 1.608.796 3.181.796 4.171 0 2.75-2.25 5-5 5-2.352 0-4.326-1.65-4.852-3.847A20.937 20.937 0 002.5 26c0 11.598 9.402 21 21 21s21-9.402 21-21-9.402-21-21-21z'
            />
            <path
                fill='#C03A2B'
                d='M12.5 39c0-6.075 4.925-11 11-11s11 4.925 11 11h-22z'
            />
            <path
                fill='#E64C3C'
                d='M12.5 39c0-2.761 4.925-5 11-5s11 2.239 11 5'
            />
            <path
                fill='#48A0DC'
                d='M13.5 15c-2.75 0-5-2.25-5-5s2.25-10 5-10 5 7.25 5 10-2.25 5-5 5z'
            />
            <path
                fill='#F29C1F'
                d='M36.5 25c-4.411 0-8-3.589-8-8a1 1 0 112 0c0 3.309 2.691 6 6 6a1 1 0 110 2zM10.5 25a1 1 0 110-2c3.309 0 6-2.691 6-6a1 1 0 112 0c0 4.411-3.589 8-8 8z'
            />
        </svg>
    )
}
