import React from 'react'
import classNames from 'classnames/bind'

import styles from '../styles/components/LateralBanner.module.scss'

export const LateralBanner = props => {
    const { children, containerClassName } = props

    const cx = classNames.bind(styles)

    const container = cx({
        'lateran-banner__container': true,
        [containerClassName]: containerClassName,
    })

    return (
        <div className={container}>
            <img
                src='https://es.dplay.com/004914/static/resources/images/dplay-logo-white.svg'
                alt='dplay'
                width={100}
            />
            {children}
        </div>
    )
}
