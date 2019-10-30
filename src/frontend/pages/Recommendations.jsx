import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
    setRecommendationPageDataRequest,
    setPlayerGroupFromAlbum,
    setPlayerGroupFromPlaylist,
} from '../actions'
import { CardsSection, MainLayout, RedirectBoundary } from '../components'

const mapStateToProps = state => {
    return {
        ...state.main,
        user: state.auth.user,
    }
}

const mapDispatchToProps = {
    setRecommendationPageDataRequest,
    setPlayerGroupFromAlbum,
    setPlayerGroupFromPlaylist,
}

export const Recommendations = connect(mapStateToProps, mapDispatchToProps)(props => {
    const {
        setRecommendationPageDataRequest,
        setPlayerGroupFromAlbum,
        setPlayerGroupFromPlaylist,
        user,
        newReleases,
        featuredPlaylists,
        location,
    } = props

    useEffect(() => {
        if (user) {
            setRecommendationPageDataRequest({ country: user.country })
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
                <CardsSection
                    title='Nuevos lanzamientos'
                    cards={newReleases.items}
                    onClick={cardClickHandler}
                />
                <CardsSection
                    title='Lo último en playlists'
                    cards={featuredPlaylists.items}
                    onClick={cardClickHandler}
                />
            </MainLayout>
        </RedirectBoundary>
    )
})
