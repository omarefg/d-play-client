import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setGenresPlaylistsRequest } from '../actions'
import { MainLayout, RedirectBoundary } from '../components'

const mapStateToProps = state => {
    return {
        ...state.genres,
        user: state.auth.user,
    }
}

const mapDispatchToProps = {
    setGenresPlaylistsRequest,
}

export const Genres = connect(mapStateToProps, mapDispatchToProps)(props => {
    const {
        location,
        user,
        setGenresPlaylistsRequest,
    } = props

    useEffect(() => {
        if (user) {
            setGenresPlaylistsRequest({ country: user.country, offset: 0 })
        }
    }, [])

    return (
        <RedirectBoundary>
            <MainLayout
                pathname={location.pathname}
            />
        </RedirectBoundary>
    )
})
