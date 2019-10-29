import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import {
    setPlayerTrackIndex,
    deletePlayerErrorMessage,
    setPlayerIsPlaying,
    setPlayerTrackTimePosition,
    setPlayerVolume,
} from '../actions'
import { PlayerArtistInfo } from './PlayerArtistInfo'
import { PlayerMenu } from './PlayerMenu'
import { SnackbarNotification } from './SnackbarNotification'
import { ProgressBar } from './ProgressBar'

import styles from '../styles/components/Player.module.scss'

const mapStateToProps = state => {
    return {
        ...state.player,
    }
}

const mapDispatchToProps = {
    setPlayerTrackIndex,
    deletePlayerErrorMessage,
    setPlayerIsPlaying,
    setPlayerTrackTimePosition,
    setPlayerVolume,
}

export const Player = connect(mapStateToProps, mapDispatchToProps)(props => {
    const musicPlayer = useRef(null)
    const {
        playerGroup,
        playerTrackIndex,
        trackTimePosition,
        error,
        setPlayerTrackIndex,
        deletePlayerErrorMessage,
        playerIsPlaying,
        setPlayerIsPlaying,
        setPlayerTrackTimePosition,
        playerVolume,
        setPlayerVolume,
    } = props

    const track = playerGroup.items[playerTrackIndex] || { preview_url: null, artists: [{ name: null }] }
    const { preview_url: src } = track
    const { name } = playerGroup

    useEffect(() => {
        const { current } = musicPlayer
        if (!src && current) {
            current.pause()
            setPlayerIsPlaying({ playerIsPlaying: false })
            setPlayerTrackTimePosition({ trackTimePosition: 0 })
            return
        }
        if (current && playerIsPlaying) {
            current.play()
            setPlayerTrackTimePosition({ trackTimePosition: 0 })
        }
    }, [src])

    useEffect(() => {
        const { current } = musicPlayer
        if (current) {
            if (src) {
                current.play()
                setPlayerIsPlaying({ playerIsPlaying: true })
            } else {
                current.pause()
                setPlayerIsPlaying({ playerIsPlaying: false })
            }
            current.currentTime = 0
            setPlayerTrackTimePosition({ trackTimePosition: 0 })
        }
    }, [name])

    const nextTrackHandler = () => {
        if (playerTrackIndex < playerGroup.total - 1) {
            setPlayerTrackIndex({ playerTrackIndex: playerTrackIndex + 1 })
        }
    }

    const prevTrackHandler = () => {
        if (playerTrackIndex > 0) {
            setPlayerTrackIndex({ playerTrackIndex: playerTrackIndex - 1 })
        }
    }

    const playPauseHandler = () => {
        const { current } = musicPlayer
        if (current) {
            if (current.paused) {
                current.play()
                setPlayerIsPlaying({ playerIsPlaying: true })
            } else {
                current.pause()
                setPlayerIsPlaying({ playerIsPlaying: false })
            }
        }
    }

    const closeSnackbarHandler = (_event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        deletePlayerErrorMessage()
    }

    const updateSliderBar = event => {
        const { current: { duration } } = musicPlayer
        const { currentTime } = event.target
        const trackTimePosition = (currentTime / duration) * 100
        setPlayerTrackTimePosition({ trackTimePosition })
    }

    const sliderChangeHandler = (_event, trackTimePosition) => {
        const { current } = musicPlayer
        current.currentTime = current.duration * (trackTimePosition / 100)
        setPlayerTrackTimePosition({ trackTimePosition })
    }

    const audioEndedHandler = () => {
        if (playerTrackIndex < playerGroup.total - 1) {
            setPlayerTrackIndex({ playerTrackIndex: playerTrackIndex + 1 })
        } else {
            setPlayerIsPlaying({ playerIsPlaying: false })
            setPlayerTrackTimePosition({ trackTimePosition: 0 })
        }
    }

    const volumeHandler = (_event, playerVolume) => {
        const { current } = musicPlayer
        current.volume = playerVolume / 100
        setPlayerVolume({ playerVolume })
    }

    const volumeIconclickHandler = () => {
        const { current } = musicPlayer
        if (current.volume) {
            current.volume = 0
            setPlayerVolume({ playerVolume: 0 })
        } else {
            current.volume = 1
            setPlayerVolume({ playerVolume: 100 })
        }
    }

    return (
        <div
            className={styles['player__container']}
        >
            <SnackbarNotification
                variant='error'
                message={error}
                onClose={closeSnackbarHandler}
                open={!!error}
            />
            <audio
                hidden
                ref={musicPlayer}
                src={src}
                onTimeUpdate={updateSliderBar}
                onEnded={audioEndedHandler}
            />
            <ProgressBar
                value={trackTimePosition}
                onChange={sliderChangeHandler}
            />
            <div
                className={styles['player__menu-container']}
            >
                <PlayerArtistInfo
                    artist={track.artists[0].name}
                    name={track.name}
                    album={playerGroup.name}
                    img={playerGroup.images[0].url}
                />
                <PlayerMenu
                    nextHandler={nextTrackHandler}
                    prevHandler={prevTrackHandler}
                    playPauseHandler={playPauseHandler}
                    track={track.name}
                    audio={src}
                    isPlaying={playerIsPlaying}
                    volume={playerVolume}
                    volumeHandler={volumeHandler}
                    volumeClickHandler={volumeIconclickHandler}
                />
            </div>
        </div>
    )
})
