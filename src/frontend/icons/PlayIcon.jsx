import React from 'react'
import classNames from 'classnames/bind'

import styles from '../styles/icons/Icons.module.scss'

export const PlayIcon = props => {
    const { className, onClick } = props

    const cx = classNames.bind(styles)

    const icon = cx({
        'icon__container--general': true,
        [className]: className,
    })

    return (
        <svg
            width='124.512px'
            height='124.512px'
            viewBox='0 0 124.512 124.512'
            className={icon}
            onClick={onClick}
        >
            <title>Reproducir</title>
            <path
                d='M113.956,57.006l-97.4-56.2c-4-2.3-9,0.6-9,5.2v112.5c0,4.6,5,7.5,9,5.2l97.4-56.2C117.956,65.105,117.956,59.306,113.956,57.006z'
            />
        </svg>
    )
}
