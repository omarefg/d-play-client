import React from 'react'
import { CirclePlayIcon, DeleteIcon } from '../icons'

import styles from '../styles/components/Card.module.scss'

export const Card = props => {
    const {
        artist,
        album,
        src,
        title,
        onClick,
        isLoading,
        canDelete,
        onDelete,
    } = props

    return (
        <div className={styles['card__container']}>
            {isLoading ? (
                <div
                    className={styles['card__loading--square']}
                />
            ) : (
                <>
                    <div
                        className={styles['card__controls']}
                    >
                        <CirclePlayIcon
                            className='icon__container--card-control'
                            onClick={onClick}
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
                    {canDelete && (
                        <span
                            className={styles['card__delete-button']}
                        >
                            <DeleteIcon
                                onClick={onDelete}
                            />
                        </span>
                    )}
                </>
            )}
        </div>
    )
}
