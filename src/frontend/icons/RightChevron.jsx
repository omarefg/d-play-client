import React from 'react'
import classNames from 'classnames/bind'

import styles from '../styles/icons/Icons.module.scss'

export const RightChevron = props => {
    const { className, onClick } = props

    const cx = classNames.bind(styles)

    const icon = cx({
        'icon__right-chevron': true,
        [className]: className,
    })

    return (
        <svg
            width='21'
            height='47'
            viewBox='0 0 21 47'
            className={icon}
            onClick={onClick}
        >
            <path
                fill='#00d1f7'
                d='M0 47v-9.814L12.231 23.5 0 9.813V0l21 23.5L0 47z'
                data-name='Subtraction 18'
                opacity='0.4'
            />
        </svg>
    )
}
