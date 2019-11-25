import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
    setMainIsCreatingPlaylist,
    setMainPlaylistFormInputValue,
    setMainPlaylistFormTextAreaValue,
    setMainPlaylistFormImgSrc,
    setMainMyListsRequest,
    setPlayerGroup,
    setMainErrorMessage,
} from '../actions'
import {
    MainLayout,
    CardsSection,
    RedirectBoundary,
    Modal,
} from '../components'

const mapStateToProps = state => {
    return {
        ...state.main,
        user: state.auth.user,
    }
}

const mapDispatchToProps = {
    setMainIsCreatingPlaylist,
    setMainPlaylistFormInputValue,
    setMainPlaylistFormTextAreaValue,
    setMainPlaylistFormImgSrc,
    setMainMyListsRequest,
    setPlayerGroup,
    setMainErrorMessage,
}

export const MyLists = connect(mapStateToProps, mapDispatchToProps)(props => {
    const {
        user,
        setMainMyListsRequest,
        setPlayerGroup,
    } = props

    const [listToDelete, setListToDelete] = useState(null)

    const closeListToDeleteHandler = () => setListToDelete(null)

    const deletePlaylistHandler = event => {
        event.preventDefault()
        if (user) {
            const list = { ...listToDelete }
            setListToDelete(null)
            const lists = user.lists.filter(l => l.name !== list.name)
            const payload = {
                id: user.id,
                lists,
            }
            setMainMyListsRequest(payload)
        }
    }

    const cardClickHandler = card => setPlayerGroup(card)

    return (
        <RedirectBoundary>
            <Modal
                title='¿Estás seguro de eliminar esta lista de reproducción?'
                description={(
                    <form
                        id='my-lists--delete-list__form-modal'
                        onSubmit={deletePlaylistHandler}
                    />
                )}
                open={Boolean(listToDelete)}
                showSubmit
                onClose={closeListToDeleteHandler}
                formID='my-lists--delete-list__form-modal'
            />
            <MainLayout>
                <CardsSection
                    title='Mis listas'
                    onClick={cardClickHandler}
                    cards={user ? user.lists : []}
                    onDelete={setListToDelete}
                    withMenu
                />
            </MainLayout>
        </RedirectBoundary>
    )
})
