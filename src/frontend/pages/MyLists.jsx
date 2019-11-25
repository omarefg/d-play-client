import React from 'react'
import { connect } from 'react-redux'
import { setPlayerGroup } from '../actions'
import {
    MainLayout,
    CardsSection,
    RedirectBoundary,
} from '../components'

const mapStateToProps = state => {
    return {
        ...state.main,
        user: state.auth.user,
    }
}

const mapDispatchToProps = {
    setPlayerGroup,
}

export const MyLists = connect(mapStateToProps, mapDispatchToProps)(props => {
    const {
        user,
        setPlayerGroup,
    } = props

    const cardClickHandler = card => setPlayerGroup(card)

    return (
        <RedirectBoundary>
            <MainLayout>
                <CardsSection
                    title='Mis listas'
                    onClick={cardClickHandler}
                    cards={user ? user.lists : []}
                    withMenu
                />
            </MainLayout>
        </RedirectBoundary>
    )
})
