import React from 'react'
import classNames from 'classnames/bind'

import styles from '../styles/icons/Icons.module.scss'

export const PauseIcon = props => {
    const { className, onClick } = props

    const cx = classNames.bind(styles)

    const icon = cx({
        'icon__container--general': true,
        [className]: className,
    })

    return (
        <svg
            x='0'
            y='0'
            enableBackground='new 0 0 124.5 124.5'
            version='1.1'
            viewBox='0 0 124.5 124.5'
            xmlSpace='preserve'
            className={icon}
            onClick={onClick}
        >
            <title>Pausar canción</title>
            <path d='M116.35 124.5c3.3 0 6-2.699 6-6V6c0-3.3-2.7-6-6-6h-36c-3.3 0-6 2.7-6 6v112.5c0 3.301 2.7 6 6 6h36zM44.15 124.5c3.3 0 6-2.699 6-6V6c0-3.3-2.7-6-6-6h-36c-3.3 0-6 2.7-6 6v112.5c0 3.301 2.7 6 6 6h36z'/>
        </svg>
    )
}
