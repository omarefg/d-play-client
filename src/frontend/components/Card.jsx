import React from 'react'
import { CirclePlayIcon } from '../icons'

import styles from '../styles/components/Card.module.scss'

export const Card = ({ artist, album, src, title }) => {
    return (
        <div className={styles['card__container']}>
            <div
                className={styles['card__controls']}
            >
                <CirclePlayIcon
                    className='icon__container--card-control'
                />
            </div>
            <img
                alt={title}
                height='140'
                src={src}
                title={title}
            />
            <p>{artist}</p>
            <p>{album}</p>
        </div>
    )
}
