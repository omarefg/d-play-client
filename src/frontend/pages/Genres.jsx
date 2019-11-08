import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
    setMainGenresPlaylistsRequest,
    setPlayerGroupFromAlbum,
    setPlayerGroupFromPlaylist,
} from '../actions'
import { MainLayout, RedirectBoundary, CardsSection } from '../components'

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
        location,
        user,
        genres,
        setMainGenresPlaylistsRequest,
        setPlayerGroupFromAlbum,
        setPlayerGroupFromPlaylist,
        history,
    } = props

    const { genresPlaylists, isLoading } = genres

    useEffect(() => {
        if (user && !genresPlaylists.length) {
            setMainGenresPlaylistsRequest({ country: user.country, offset: 0, limit: 2 })
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
                location={location}
                isLoading={isLoading}
                loadingRows={[0, 1]}
                history={history}
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
