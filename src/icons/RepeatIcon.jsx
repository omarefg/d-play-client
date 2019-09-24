import React from 'react'
import classNames from 'classnames/bind'

import styles from '../styles/icons/Icons.module.scss'

export const RepeatIcon = props => {
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
            viewBox='0 0 51.4 51.4'
        >
            <path
                d='M1.7,25.2c0.553,0,1-0.447,1-1c0-6.065,4.935-11,11-11h24v8.964L51.4,12.2L37.7,2.236V11.2h-24c-7.168,0-13,5.832-13,13C0.7,24.753,1.147,25.2,1.7,25.2z'
            />
            <path
                d='M49.7,26.2c-0.553,0-1,0.447-1,1c0,6.065-4.935,11-11,11h-24v-8.964L0,39.2l13.7,9.964V40.2h24c7.168,0,13-5.832,13-13C50.7,26.647,50.253,26.2,49.7,26.2z'
            />
        </svg>
    )
}
