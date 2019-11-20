import React from 'react'
import { connect } from 'react-redux'
import {
    setMainGenresPlaylistsRequest,
    setPlayerGroupFromAlbum,
    setPlayerGroupFromPlaylist,
} from '../actions'
import { MainLayout, RedirectBoundary, CardsSection, Loader } from '../components'

import styles from '../styles/pages/Genres.module.scss'

const mapStateToProps = state => {
    return {
        ...state.main,
        user: state.auth.user,
    }
}

const mapDispatchToProps = {
    setMainGenresPlaylistsRequest,
    setPlayerGroupFromAlbum,
    setPlayerGroupFromPlaylist,
}

export const Genres = connect(mapStateToProps, mapDispatchToProps)(props => {
    const {
        user,
        genres,
        setMainGenresPlaylistsRequest,
        setPlayerGroupFromAlbum,
        setPlayerGroupFromPlaylist,
    } = props

    const { genresPlaylists, isLoading, genresPlaylistsIndex, isLoadingObserver } = genres

    const cardClickHandler = card => {
        const { id, type, name, images } = card
        type === 'album' && setPlayerGroupFromAlbum({ id, name, images })
        type === 'playlist' && setPlayerGroupFromPlaylist({ id, name, images })
    }

    const onObserverChange = inView => {
        if (inView && !isLoadingObserver && !isLoading && genresPlaylistsIndex < 48) {
            setMainGenresPlaylistsRequest({ country: user.country, offset: genresPlaylistsIndex, limit: 3 })
        }
    }

    return (
        <RedirectBoundary>
            <MainLayout
                isLoading={isLoading}
                loadingRows={[0, 1, 2]}
                onObserverChange={onObserverChange}
            >
                {genresPlaylists.map(section => {
                    return (
                        <CardsSection
                            title={section.name}
                            cards={section.items}
                            onClick={cardClickHandler}
                            key={section.name}
                        />
                    )
                })}
                {isLoadingObserver && (
                    <div
                        className={styles['genres__observer-loader']}
                    >
                        <Loader
                            size={100}
                            color='#fff'
                            type='Audio'
                        />
                    </div>
                )}
            </MainLayout>
        </RedirectBoundary>
    )
})
