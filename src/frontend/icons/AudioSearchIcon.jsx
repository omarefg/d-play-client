import React from 'react'
import classNames from 'classnames/bind'

import styles from '../styles/icons/Icons.module.scss'

export const AudioSearchIcon = props => {
    const { className, onClick } = props

    const cx = classNames.bind(styles)

    const icon = cx({
        'icon__container--general': true,
        [className]: className,
    })
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='512'
            height='512'
            viewBox='0 0 512 512'
            onClick={onClick}
            className={icon}
        >
            <path d='M256 361c57.897 0 105-47.103 105-105V105C361 47.103 313.897 0 256 0S151 47.103 151 105v151c0 57.897 47.103 105 105 105z'/>
            <path d='M406 211c-8.284 0-15 6.716-15 15v30c0 74.439-60.561 135-135 135s-135-60.561-135-135v-30c0-8.284-6.716-15-15-15s-15 6.716-15 15v30c0 85.925 66.023 156.707 150 164.311V482h-75c-8.284 0-15 6.716-15 15s6.716 15 15 15h180c8.284 0 15-6.716 15-15s-6.716-15-15-15h-75v-61.689c83.977-7.604 150-78.386 150-164.311v-30c0-8.284-6.716-15-15-15zM106 151c8.284 0 15-6.716 15-15V61c0-8.284-6.716-15-15-15s-15 6.716-15 15v75c0 8.284 6.716 15 15 15zM46 0c-8.284 0-15 6.716-15 15v166c0 8.284 6.716 15 15 15s15-6.716 15-15V15c0-8.284-6.716-15-15-15zM406 46c-8.284 0-15 6.716-15 15v75c0 8.284 6.716 15 15 15s15-6.716 15-15V61c0-8.284-6.716-15-15-15zM466 0c-8.284 0-15 6.716-15 15v166c0 8.284 6.716 15 15 15s15-6.716 15-15V15c0-8.284-6.716-15-15-15z'/>
        </svg>
    )
}
