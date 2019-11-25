import React from 'react'
import classNames from 'classnames/bind'

import styles from '../styles/icons/Icons.module.scss'

export const MoreIcon = props => {
    const { className, onClick } = props

    const cx = classNames.bind(styles)

    const icon = cx({
        'icon__container--general': true,
        'icon__container--more': true,
        [className]: className,
    })

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='408'
            height='408'
            x='0'
            y='0'
            enableBackground='new 0 0 408 408'
            version='1.1'
            viewBox='0 0 408 408'
            xmlSpace='preserve'
            onClick={onClick}
            className={icon}
        >
            <path d='M204 102c28.05 0 51-22.95 51-51S232.05 0 204 0s-51 22.95-51 51 22.95 51 51 51zm0 51c-28.05 0-51 22.95-51 51s22.95 51 51 51 51-22.95 51-51-22.95-51-51-51zm0 153c-28.05 0-51 22.95-51 51s22.95 51 51 51 51-22.95 51-51-22.95-51-51-51z'/>
        </svg>
    )
}
