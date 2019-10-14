import React from 'react'

import styles from '../styles/components/ListItem.module.scss'

export const ListItem = ({ title }) => {
    return (
        <li className={styles['list-item__item']}>
            {title}
        </li>
    )
}
