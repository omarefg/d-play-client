import React from 'react'
import classNames from 'classnames/bind'

import styles from '../styles/components/LateralSection.module.scss'

export const LateralSection = props => {
    const { title, icon, containerClassName } = props

    const cx = classNames.bind(styles)

    const container = cx({
        'lateral-section__container': true,
        [containerClassName]: containerClassName,
    })

    return (
        <div className={container}>
            {icon && typeof icon === 'function' ? icon() : icon}
            {title}
        </div>
    )
}
