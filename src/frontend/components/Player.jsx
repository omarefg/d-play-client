import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
    setPlayerTrackIndex,
    deletePlayerErrorMessage,
    setPlayerIsPlaying,
    setPlayerTrackTimePosition,
    setPlayerVolume,
    setMainMyListsRequest,
    setSongIsInFavorites,
    setMainErrorMessage,
    setMainIsCreatingPlaylist,
    setMainPlaylistFormInputValue,
    setMainPlaylistFormTextAreaValue,
    setMainPlaylistFormImgSrc,
} from '../actions'
import { PlayerArtistInfo } from './PlayerArtistInfo'
import { PlayerMenu } from './PlayerMenu'
import { SnackbarNotification } from './SnackbarNotification'
import { ProgressBar } from './ProgressBar'
import { Modal } from './Modal'
import { PlaylistForm } from './PlaylistsForm'

import styles from '../styles/components/Player.module.scss'

const mapStateToProps = state => {
    return {
        ...state.player,
        user: state.auth.user,
        myLists: state.main.myLists,
    }
}

const mapDispatchToProps = {
    setPlayerTrackIndex,
    deletePlayerErrorMessage,
    setPlayerIsPlaying,
    setPlayerTrackTimePosition,
    setPlayerVolume,
    setMainMyListsRequest,
    setSongIsInFavorites,
    setMainErrorMessage,
    setMainIsCreatingPlaylist,
    setMainPlaylistFormInputValue,
    setMainPlaylistFormTextAreaValue,
    setMainPlaylistFormImgSrc,
}

export const Player = withRouter(connect(mapStateToProps, mapDispatchToProps)(props => {
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
        setMainMyListsRequest,
        setSongIsInFavorites,
        songIsInFavorites,
        user,
        isLoading,
        myLists,
        setMainIsCreatingPlaylist,
        setMainPlaylistFormInputValue,
        setMainPlaylistFormTextAreaValue,
        setMainPlaylistFormImgSrc,
    } = props

    const {
        creatingListTextInputValue,
        creatingListTextAreaValue,
        creatingListImageSrc,
        isCreatingList,
    } = myLists

    const track = playerGroup.items[playerTrackIndex] || { preview_url: null, artists: [{ name: null }], isMock: true }
    const { preview_url: src } = track
    const { name } = playerGroup

    const songIsInFavoritesHandler = lists => {
        const { id } = track
        const listsToUse = lists || user.lists
        const favorites = listsToUse.find(l => l.name === 'Favoritas')
        let song = null
        if (favorites) {
            song = favorites.items.find(f => f.id === id)
        }
        return song
    }

    useEffect(() => {
        if (user) {
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
            setSongIsInFavorites({ songIsInFavorites: songIsInFavoritesHandler() })
        }
    }, [src])

    useEffect(() => {
        if (user) {
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
        }
    }, [name])

    const nextTrackHandler = () => {
        if (playerTrackIndex < playerGroup.total - 1 || playerTrackIndex < playerGroup.items.length - 1) {
            setPlayerTrackIndex({ playerTrackIndex: playerTrackIndex + 1 })
        }
    }

    const prevTrackHandler = () => {
        if (playerTrackIndex > 0) {
            setPlayerTrackIndex({ playerTrackIndex: playerTrackIndex - 1 })
        }
    }

    const playPauseHandler = () => {
        if (!track.isMock) {
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

    const toggleSongInFavorites = () => {
        if (!track.isMock) {
            const favorites = user.lists.find(l => l.name === 'Favoritas')
            if (favorites) {
                const song = favorites.items.find(f => f.id === track.id)
                if (song) {
                    favorites.items = favorites.items.filter(f => f.id !== track.id)
                } else {
                    favorites.items.push(track)
                }
            }
            const nonFavorites = user.lists.filter(l => l.name !== 'Favoritas')
            const lists = [favorites, ...nonFavorites]
            const payload = {
                id: user.id,
                lists,
            }
            setMainMyListsRequest(payload, false)
            setSongIsInFavorites({ songIsInFavorites: songIsInFavoritesHandler(lists) })
        }
    }

    const closePlaylistModal = () => {
        setMainIsCreatingPlaylist({ isCreatingList: false })
        setMainPlaylistFormInputValue({ creatingListTextInputValue: '' })
        setMainPlaylistFormTextAreaValue({ creatingListTextAreaValue: '' })
        setMainPlaylistFormImgSrc({ creatingListImageSrc: '' })
    }

    const onTextInputChange = event => setMainPlaylistFormInputValue({ creatingListTextInputValue: event.target.value })

    const onTextAreaChange = event => setMainPlaylistFormTextAreaValue({ creatingListTextAreaValue: event.target.value })

    const onFileInputChange = event => {
        const { files } = event.target
        const file = files[0]
        const { type } = file
        if (type.includes('image')) {
            const FR = new FileReader()
            FR.addEventListener('load', fileReaderEvent => {
                const { result } = fileReaderEvent.target
                setMainPlaylistFormImgSrc({ creatingListImageSrc: result })
            })
            FR.readAsDataURL(file)
        }
    }

    const onModalSubmit = event => {
        event.preventDefault()
        const list = {
            name: creatingListTextInputValue,
            description: creatingListTextAreaValue,
            image: creatingListImageSrc || `https://picsum.photos/200?t=${Date.now()}`,
            items: [],
        }
        const playlistExists = user.lists.find(l => l.name.toUpperCase() === list.name.toUpperCase())
        if (playlistExists) {
            setMainErrorMessage({ message: `La lista ${list.name} ya existe` })
            return
        }
        const lists = [...user.lists, list]
        const payload = {
            id: user.id,
            lists,
        }
        setMainMyListsRequest(payload)
        closePlaylistModal()
    }

    if (user) {
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
                <Modal
                    title='Crear Lista de Reproducción'
                    description={(
                        <PlaylistForm
                            textInputValue={creatingListTextInputValue}
                            onTextInputChange={onTextInputChange}
                            textAreaValue={creatingListTextAreaValue}
                            onTextAreaChange={onTextAreaChange}
                            onFileInputChange={onFileInputChange}
                            src={creatingListImageSrc}
                            onSubmit={onModalSubmit}
                            formID='player--playlists__form-modal'
                        />
                    )}
                    open={isCreatingList}
                    showSubmit
                    onClose={closePlaylistModal}
                    formID='player--playlists__form-modal'
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
                        img={playerGroup.images ? playerGroup.images[0].url : playerGroup.image}
                    />
                    <PlayerMenu
                        nextHandler={nextTrackHandler}
                        prevHandler={prevTrackHandler}
                        playPauseHandler={playPauseHandler}
                        trackName={track.name}
                        audio={src}
                        isPlaying={playerIsPlaying}
                        volume={playerVolume}
                        volumeHandler={volumeHandler}
                        volumeClickHandler={volumeIconclickHandler}
                        toggleSongInFavorites={toggleSongInFavorites}
                        songIsInFavorites={songIsInFavorites}
                        track={track}
                        isLoading={isLoading}
                    />
                </div>
            </div>
        )
    }

    return null
}))
