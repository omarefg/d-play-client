import React from 'react'
import classNames from 'classnames/bind'

import styles from '../styles/icons/Icons.module.scss'

export const CirclePlayIcon = props => {
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
            enableBackground='new 0 0 60 60'
            version='1.1'
            viewBox='0 0 60 60'
            xmlSpace='preserve'
            className={icon}
            onClick={onClick}
        >
            <path d='M45.563 29.174l-22-15A1 1 0 0022 15v30a.999.999 0 001.563.826l22-15a1 1 0 000-1.652zM24 43.107V16.893L43.225 30 24 43.107z'/>
            <path d='M30 0C13.458 0 0 13.458 0 30s13.458 30 30 30 30-13.458 30-30S46.542 0 30 0zm0 58C14.561 58 2 45.439 2 30S14.561 2 30 2s28 12.561 28 28-12.561 28-28 28z'/>
        </svg>
    )
}
