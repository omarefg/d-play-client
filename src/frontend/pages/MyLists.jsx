import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { MainLayout } from '../components'

const mapStateToProps = state => {
    return {
        ...state.main,
        user: state.auth.user,
    }
}

const mapDispatchToProps = {}

export const MyLists = connect(mapStateToProps, mapDispatchToProps)(props => {
    const { location } = props

    useEffect(() => {}, [])

    return (
        <MainLayout
            pathname={location.pathname}
        />
    )
})
