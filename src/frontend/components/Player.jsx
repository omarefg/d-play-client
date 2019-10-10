import React from 'react'
import { Slider } from '@material-ui/core'
import { PlayerArtistInfo } from './PlayerArtistInfo'
import { PlayerMenu } from './PlayerMenu'

import styles from '../styles/components/Player.module.scss'

export const Player = props => {
    const { src } = props
    return (
        <div
            className={styles['player__container']}
        >
            <audio
                controls='true'
                preload='true'
                hidden='true'
            >
                <source src={src}/>
            </audio>
            <Slider/>
            <div
                className={styles['player__menu-container']}
            >
                <PlayerArtistInfo/>
                <PlayerMenu/>
            </div>
        </div>
    )
}
