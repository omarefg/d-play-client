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
            xmlns='http://www.w3.org/2000/svg'
            width='510'
            height='510'
            x='0'
            y='0'
            enableBackground='new 0 0 510 510'
            version='1.1'
            viewBox='0 0 510 510'
            xmlSpace='preserve'
            className={icon}
            onClick={onClick}
        >
            <path d='M178.5 357h51V153h-51v204zM255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm0 459c-112.2 0-204-91.8-204-204S142.8 51 255 51s204 91.8 204 204-91.8 204-204 204zm25.5-102h51V153h-51v204z'/>
        </svg>
    )
}
