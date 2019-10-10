import React from 'react'
import { PlayIcon, RepeatIcon, RandomIcon, PreviousIcon, LikeIcon } from '../icons'

import styles from '../styles/components/PlayerMenu.module.scss'

export const PlayerMenu = () => {
    return (
        <div className={styles['player-menu__container']}>
            <LikeIcon
                className='icon__container--player-menu'
            />
            <RandomIcon
                className='icon__container--player-menu'
            />
            <PreviousIcon
                className='icon__container--player-menu'
            />
            <PlayIcon
                className='icon__container--player-menu-play'
            />
            <PreviousIcon
                className='icon__container--player-menu-turned'
            />
            <RepeatIcon
                className='icon__container--player-menu'
            />
        </div>
    )
}
