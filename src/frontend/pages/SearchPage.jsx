import React from 'react'
import { connect } from 'react-redux'
import {
    setMainGenresPlaylistsRequest,
    setPlayerGroupFromAlbum,
    setPlayerGroupFromPlaylist,
    setPlayerGroupFromTrack,
    setPlayerGroupFromArtist,
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
    setPlayerGroupFromTrack,
    setPlayerGroupFromArtist,
}

export const SearchPage = connect(mapStateToProps, mapDispatchToProps)(props => {
    const {
        search,
        setPlayerGroupFromAlbum,
        setPlayerGroupFromPlaylist,
        setPlayerGroupFromTrack,
        setPlayerGroupFromArtist,
        user,
    } = props

    const { isLoading, searchResults } = search
    const { albums, artists, tracks, playlists } = searchResults

    const cardClickHandler = card => {
        if (user) {
            const { id, type, name, images } = card
            type === 'album' && setPlayerGroupFromAlbum({ id, name, images })
            type === 'playlist' && setPlayerGroupFromPlaylist({ id, name, images })
            type === 'track' && setPlayerGroupFromTrack({ id, name, images })
            type === 'artist' && setPlayerGroupFromArtist({ id, name, images, market: user.country })
        }
    }

    return (
        <RedirectBoundary>
            <MainLayout
                isLoading={isLoading}
                loadingRows={[0, 1]}
            >
                {albums && Object.keys(albums).length && albums.items.length && (
                    <CardsSection
                        title='Albumes'
                        cards={albums.items.filter(item => item.images.length)}
                        onClick={cardClickHandler}
                    />
                )}
                {artists && Object.keys(artists).length && artists.items.length && artists.items.filter(item => item.images.length).length && (
                    <CardsSection
                        title='Artistas'
                        cards={artists.items.filter(item => item.images.length)}
                        onClick={cardClickHandler}
                    />
                )}
                {tracks && Object.keys(tracks).length && tracks.items.length && tracks.items.filter(item => item.album.images.length).length && (
                    <CardsSection
                        title='Canciones'
                        cards={tracks.items.map(item => ({ ...item, images: item.album.images })).filter(item => item.images.length)}
                        onClick={cardClickHandler}
                    />
                )}
                {playlists && Object.keys(playlists).length && playlists.items.length && (
                    <CardsSection
                        title='Playlists'
                        cards={playlists.items.filter(item => item.images.length)}
                        onClick={cardClickHandler}
                    />
                )}
            </MainLayout>
        </RedirectBoundary>
    )
})
