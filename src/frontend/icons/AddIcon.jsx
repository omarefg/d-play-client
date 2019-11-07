import React from 'react'
import classNames from 'classnames/bind'

import styles from '../styles/icons/Icons.module.scss'

export const AddIcon = props => {
    const { className, onClick } = props

    const cx = classNames.bind(styles)

    const icon = cx({
        'icon__container--general': true,
        [className]: className,
    })

    return (
        <svg
            viewBox='0 0 459 459'
            className={icon}
            onClick={onClick}
        >
            <path d='M408,0H51C22.95,0,0,22.95,0,51v357c0,28.05,22.95,51,51,51h357c28.05,0,51-22.95,51-51V51C459,22.95,436.05,0,408,0zM357,255H255v102h-51V255H102v-51h102V102h51v102h102V255z'/>
        </svg>
    )
}
