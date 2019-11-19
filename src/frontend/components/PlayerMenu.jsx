import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
    PlayIcon,
    PrevNextIcon,
    LikeIcon,
    PauseIcon,
    SadFaceIcon,
    FilledLikeIcon,
    AddToPlaylistIcon,
} from '../icons'
import { setMainMyListsRequest } from '../actions'
import { VolumeSlider } from './VolumeSlider'
import { SelectableMenu } from './SelectableMenu'

import styles from '../styles/components/PlayerMenu.module.scss'

const mapStateToProps = state => {
    return {
        user: state.auth.user,
    }
}

const mapDispatchToProps = {
    setMainMyListsRequest,
}

export const PlayerMenu = connect(mapStateToProps, mapDispatchToProps)(props => {
    const [anchorEl, setAnchorEl] = useState(null)

    const {
        nextHandler,
        prevHandler,
        playPauseHandler,
        trackName,
        audio,
        isPlaying,
        volume,
        volumeHandler,
        volumeClickHandler,
        toggleSongInFavorites,
        songIsInFavorites,
        user,
        setMainMyListsRequest,
        track,
    } = props

    const closeSelectableMenu = () => setAnchorEl(null)

    const openSelectableMenu = event => setAnchorEl(event.target)

    const addToPlaylist = index => {
        const listsBeforeUpdate = [...user.lists]
        const list = listsBeforeUpdate[index]
        const song = list.items.find(f => f.id === track.id)
        if (song) {
            list.items = list.items.filter(f => f.id !== track.id)
        } else {
            list.items.push(track)
        }
        listsBeforeUpdate[index] = list
        const payload = {
            id: user.id,
            lists: listsBeforeUpdate,
        }
        setMainMyListsRequest(payload, false)
        closeSelectableMenu()
    }

    return (
        <div className={styles['player-menu__container']}>
            {songIsInFavorites ? (
                <FilledLikeIcon
                    className='icon__container--player-menu'
                    onClick={toggleSongInFavorites}
                />
            ) : (
                <LikeIcon
                    className='icon__container--player-menu'
                    onClick={toggleSongInFavorites}
                />
            )}
            {user.lists.length && (
                <AddToPlaylistIcon
                    className='icon__container--player-menu'
                    onClick={openSelectableMenu}
                />
            )}
            <SelectableMenu
                items={user.lists.filter(l => l.name !== 'Favoritas')}
                anchorEl={anchorEl}
                id='player-menu__selectable--menu'
                onClose={closeSelectableMenu}
                onItemClick={addToPlaylist}
            />
            <PrevNextIcon
                className='icon__container--player-menu'
                onClick={prevHandler}
            />
            {!isPlaying ?
                ((!trackName && !audio) || (trackName && audio)) ? (
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
            <VolumeSlider
                value={volume}
                onChange={volumeHandler}
                volumeClickHandler={volumeClickHandler}
            />
        </div>
    )
})
