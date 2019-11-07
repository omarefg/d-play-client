import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
    setGenresPlaylistsRequest,
    setPlayerGroupFromAlbum,
    setPlayerGroupFromPlaylist,
} from '../actions'
import { MainLayout, RedirectBoundary, CardsSection } from '../components'

const mapStateToProps = state => {
    return {
        ...state.genres,
        user: state.auth.user,
    }
}

const mapDispatchToProps = {
    setGenresPlaylistsRequest,
    setPlayerGroupFromAlbum,
    setPlayerGroupFromPlaylist,
}

export const Genres = connect(mapStateToProps, mapDispatchToProps)(props => {
    const {
        location,
        user,
        genresPlaylists,
        setGenresPlaylistsRequest,
        setPlayerGroupFromAlbum,
        setPlayerGroupFromPlaylist,
    } = props

    useEffect(() => {
        if (user && !genresPlaylists.length) {
            setGenresPlaylistsRequest({ country: user.country, offset: 0 })
        }
    }, [])

    const cardClickHandler = card => {
        const { id, type, name, images } = card
        type === 'album' && setPlayerGroupFromAlbum({ id, name, images })
        type === 'playlist' && setPlayerGroupFromPlaylist({ id, name, images })
    }

    return (
        <RedirectBoundary>
            <MainLayout
                pathname={location.pathname}
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
            </MainLayout>
        </RedirectBoundary>
    )
})
