import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from '../styles/components/ListItem.module.scss'

export const ListItem = props => {
    const { title, active, to } = props
    const cx = classNames.bind(styles)

    const item = cx({
        'list-item__item': true,
        'active': active,
    })

    return (
        <Link
            className={item}
            to={to}
        >
            {title}
        </Link>
    )
}
