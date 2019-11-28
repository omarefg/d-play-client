import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../styles/components/Banner.module.scss'

export const Banner = props => {
    const { title, subtitle, to } = props

    return (
        <Link
            to={to}
            className={styles['banner__link']}
        >
            <section className={styles['banner__container']}>
                <h3>{title}</h3>
                <h6>{subtitle}</h6>
            </section>
        </Link>
    )
}
