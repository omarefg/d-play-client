import React from 'react'
import classNames from 'classnames/bind'

import styles from '../styles/icons/Icons.module.scss'

export const FilledLikeIcon = props => {
    const { className, onClick } = props

    const cx = classNames.bind(styles)

    const icon = cx({
        'icon__container--general': true,
        'icon__container--is-filled': true,
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
            <path d='M255 489.6l-35.7-35.7C86.7 336.6 0 257.55 0 160.65 0 81.6 61.2 20.4 140.25 20.4c43.35 0 86.7 20.4 114.75 53.55C283.05 40.8 326.4 20.4 369.75 20.4 448.8 20.4 510 81.6 510 160.65c0 96.9-86.7 175.95-219.3 293.25L255 489.6z'/>
        </svg>
    )
}
