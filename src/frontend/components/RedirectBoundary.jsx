import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        user: state.auth.user,
    }
}

export const RedirectBoundary = connect(mapStateToProps)(({ children, user, inverse }) => {
    if (!inverse && !user) {
        return (
            <Redirect
                to='/inicia-sesion'
            />
        )
    }

    if (inverse && user) {
        return (
            <Redirect
                to='/recomendaciones'
            />
        )
    }

    return (
        <>
            {children}
        </>
    )
})
