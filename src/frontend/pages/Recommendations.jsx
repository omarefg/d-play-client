import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
    setMainRecommendationPageDataRequest,
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
    setMainRecommendationPageDataRequest,
    setPlayerGroupFromAlbum,
    setPlayerGroupFromPlaylist,
}

export const Recommendations = connect(mapStateToProps, mapDispatchToProps)(props => {
    const {
        setMainRecommendationPageDataRequest,
        setPlayerGroupFromAlbum,
        setPlayerGroupFromPlaylist,
        user,
        recommendations,
    } = props

    const { newReleases, featuredPlaylists } = recommendations

    useEffect(() => {
        if (user) {
            setMainRecommendationPageDataRequest({ country: user.country })
        }
    }, [])

    const cardClickHandler = card => {
        const { id, type, name, images } = card
        type === 'album' && setPlayerGroupFromAlbum({ id, name, images })
        type === 'playlist' && setPlayerGroupFromPlaylist({ id, name, images })
    }

    return (
        <RedirectBoundary>
            <MainLayout>
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
