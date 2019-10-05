import React from 'react'
import { CirclePlayIcon } from '../icons'

import styles from '../styles/components/Card.module.scss'

export const Card = () => {
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
                alt='Contemplative Reptile'
                height='140'
                src='https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
                title='Contemplative Reptile'
            />
        </div>
    )
}
