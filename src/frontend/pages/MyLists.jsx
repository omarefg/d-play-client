import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
    setPlayerGroupFromAlbum,
    setPlayerGroupFromPlaylist,
    setMyListsIsCreatingList,
    setPlaylistFormInputValue,
    setPlaylistFormTextAreaValue,
    setPlaylistFormImgSrc,
    setMyListsRequest,
} from '../actions'
import { MainLayout, CardsSection, RedirectBoundary, Modal, PlaylistForm } from '../components'

const mapStateToProps = state => {
    return {
        ...state.myLists,
        user: state.auth.user,
    }
}

const mapDispatchToProps = {
    setPlayerGroupFromAlbum,
    setPlayerGroupFromPlaylist,
    setMyListsIsCreatingList,
    setPlaylistFormInputValue,
    setPlaylistFormTextAreaValue,
    setPlaylistFormImgSrc,
    setMyListsRequest,
}

export const MyLists = connect(mapStateToProps, mapDispatchToProps)(props => {
    const {
        user,
        location,
        isCreatingList,
        setPlayerGroupFromAlbum,
        setPlayerGroupFromPlaylist,
        setMyListsIsCreatingList,
        creatingListTextInputValue,
        creatingListTextAreaValue,
        creatingListImageSrc,
        setPlaylistFormInputValue,
        setPlaylistFormTextAreaValue,
        setPlaylistFormImgSrc,
        setMyListsRequest,
    } = props

    useEffect(() => {}, [])

    const cardClickHandler = card => {
        const { id, type, name, images } = card
        type === 'album' && setPlayerGroupFromAlbum({ id, name, images })
        type === 'playlist' && setPlayerGroupFromPlaylist({ id, name, images })
    }

    const openPlaylistModal = () => setMyListsIsCreatingList({ isCreatingList: true })

    const closePlaylistModal = () => {
        setMyListsIsCreatingList({ isCreatingList: false })
        setPlaylistFormInputValue({ creatingListTextInputValue: '' })
        setPlaylistFormTextAreaValue({ creatingListTextAreaValue: '' })
        setPlaylistFormImgSrc({ creatingListImageSrc: '' })
    }

    const onTextInputChange = event => setPlaylistFormInputValue({ creatingListTextInputValue: event.target.value })

    const onTextAreaChange = event => setPlaylistFormTextAreaValue({ creatingListTextAreaValue: event.target.value })

    const onFileInputChange = event => {
        const { files } = event.target
        const file = files[0]
        const { type } = file
        if (type.includes('image')) {
            const FR = new FileReader()
            FR.addEventListener('load', fileReaderEvent => {
                const { result } = fileReaderEvent.target
                setPlaylistFormImgSrc({ creatingListImageSrc: result })
            })
            FR.readAsDataURL(file)
        }
    }

    const onModalSubmit = event => {
        event.preventDefault()
        const list = {
            title: creatingListTextInputValue,
            description: creatingListTextAreaValue,
            image: creatingListImageSrc,
            items: [],
        }
        const lists = [...user.lists, list]
        const payload = {
            id: user._id,
            lists,
        }
        setMyListsRequest(payload)
        closePlaylistModal()
    }

    return (
        <RedirectBoundary>
            <Modal
                title='Crear Lista de Reproducción'
                description={(
                    <PlaylistForm
                        textInputValue={creatingListTextInputValue}
                        onTextInputChange={onTextInputChange}
                        textAreaValue={creatingListTextAreaValue}
                        onTextAreaChange={onTextAreaChange}
                        onFileInputChange={onFileInputChange}
                        src={creatingListImageSrc}
                        onSubmit={onModalSubmit}
                        formID='my-lists--playlists__form-modal'
                    />
                )}
                open={isCreatingList}
                showSubmit
                onClose={closePlaylistModal}
                formID='my-lists--playlists__form-modal'
            />
            <MainLayout
                pathname={location.pathname}
            >
                <CardsSection
                    title='Mis listas'
                    onClick={cardClickHandler}
                    isForPlaylists
                    addPlaylist={openPlaylistModal}
                    cards={user.lists}
                />
            </MainLayout>
        </RedirectBoundary>
    )
})
