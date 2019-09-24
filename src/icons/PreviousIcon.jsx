import React from 'react'
import classNames from 'classnames/bind'

import styles from '../styles/icons/Icons.module.scss'

export const PreviousIcon = props => {
    const { className } = props

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
            viewBox='0 0 60 60'
        >
            <path
                d='M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M20,46h-7V14h7V46z M46,45c0,0.371-0.205,0.711-0.533,0.884C45.321,45.962,45.16,46,45,46c-0.197,0-0.394-0.059-0.563-0.174l-22-15C22.164,30.64,22,30.331,22,30s0.164-0.64,0.437-0.826l22-15c0.308-0.208,0.705-0.231,1.031-0.058C45.795,14.289,46,14.629,46,15V45z'
            />
        </svg>
    )
}
