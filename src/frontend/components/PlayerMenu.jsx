import React from 'react'
import {
    PlayIcon,
    RepeatIcon,
    RandomIcon,
    PrevNextIcon,
    LikeIcon,
    PauseIcon,
    SadFaceIcon,
} from '../icons'
import { VolumeSlider } from './VolumeSlider'

import styles from '../styles/components/PlayerMenu.module.scss'

export const PlayerMenu = props => {
    const {
        nextHandler,
        prevHandler,
        playPauseHandler,
        track,
        audio,
        isPlaying,
        volume,
        volumeHandler,
        volumeClickHandler,
    } = props

    return (
        <div className={styles['player-menu__container']}>
            <LikeIcon
                className='icon__container--player-menu'
            />
            <RandomIcon
                className='icon__container--player-menu'
            />
            <PrevNextIcon
                className='icon__container--player-menu'
                onClick={prevHandler}
            />
            {!isPlaying ?
                ((!track && !audio) || (track && audio)) ? (
                    <PlayIcon
                        className='icon__container--player-menu-play'
                        onClick={playPauseHandler}
                    />
                ) : (
                    <SadFaceIcon
                        className='icon__container--player-menu-play'
                    />
                ) : (
                    <PauseIcon
                        className='icon__container--player-menu-play'
                        onClick={playPauseHandler}
                    />
                )}
            <PrevNextIcon
                className='icon__container--player-menu-turned'
                onClick={nextHandler}
            />
            <RepeatIcon
                className='icon__container--player-menu'
            />
            <VolumeSlider
                value={volume}
                onChange={volumeHandler}
                volumeClickHandler={volumeClickHandler}
            />
        </div>
    )
}
