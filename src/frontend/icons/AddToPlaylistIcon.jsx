import React from 'react'
import classNames from 'classnames/bind'

import styles from '../styles/icons/Icons.module.scss'

export const AddToPlaylistIcon = props => {
    const { className, onClick } = props

    const cx = classNames.bind(styles)

    const icon = cx({
        'icon__container--general': true,
        [className]: className,
    })

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            x='0'
            y='0'
            enableBackground='new 0 0 426.667 426.667'
            version='1.1'
            viewBox='0 0 426.667 426.667'
            xmlSpace='preserve'
            className={icon}
            onClick={onClick}
        >
            <path d='M0 64H256V106.667H0z'/>
            <path d='M0 149.333H256V192H0z'/>
            <path d='M0 234.667H170.667V277.334H0z'/>
            <path d='M341.333 234.667L341.333 149.333 298.667 149.333 298.667 234.667 213.333 234.667 213.333 277.333 298.667 277.333 298.667 362.667 341.333 362.667 341.333 277.333 426.667 277.333 426.667 234.667z'/>
        </svg>
    )
}
