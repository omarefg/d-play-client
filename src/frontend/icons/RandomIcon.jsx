import React from 'react'
import classNames from 'classnames/bind'

import styles from '../styles/icons/Icons.module.scss'

export const RandomIcon = props => {
    const { className } = props

    const cx = classNames.bind(styles)

    const icon = cx({
        'icon__container--general': true,
        [className]: className,
    })
    return (
        <svg
            viewBox='0 0 18.518 14.98'
            className={icon}
        >
            <path
                d='M6.336 42.823l.858 1.716.863-1.725-.34-.681A3.837 3.837 0 004.265 40H0v1.543h4.265a2.3 2.3 0 012.07 1.28z'
                data-name='Path 342'
                transform='translate(0 -37.911)'
            />
            <path

                d='M99.531 105.851l-1.091 1.091 1 1h-3.177a2.3 2.3 0 01-2.07-1.28l-.858-1.716-.863 1.725.34.681a3.837 3.837 0 003.451 2.133h3.174l-1 1 1.091 1.091 2.315-2.315a.772.772 0 000-1.091z'
                data-name='Path 343'
                transform='translate(-83.553 -96.591)'
            />
            <path
                d='M18.292 20.658l-2.315-2.315-1.091 1.091 1 1H12.71a3.837 3.837 0 00-3.451 2.133l-2.923 5.844a2.3 2.3 0 01-2.07 1.28H0v1.543h4.265A3.837 3.837 0 007.716 29.1l2.923-5.847a2.3 2.3 0 012.07-1.28h3.174l-1 1 1.091 1.091 2.315-2.315a.772.772 0 000-1.091z'
                data-name='Path 344'
                transform='translate(0 -18.343)'
            />
        </svg>
    )
}
