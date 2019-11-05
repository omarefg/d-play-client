import React from 'react'
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
    PlaylistForm,
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
        location,
        setMainIsCreatingPlaylist,
        myLists,
        setMainPlaylistFormInputValue,
        setMainPlaylistFormTextAreaValue,
        setMainPlaylistFormImgSrc,
        setMainMyListsRequest,
        setPlayerGroup,
        setMainErrorMessage,
    } = props

    const {
        creatingListTextInputValue,
        creatingListTextAreaValue,
        creatingListImageSrc,
        isCreatingList,
    } = myLists

    const cardClickHandler = card => {
        setPlayerGroup(card)
    }

    const openPlaylistModal = () => setMainIsCreatingPlaylist({ isCreatingList: true })

    const closePlaylistModal = () => {
        setMainIsCreatingPlaylist({ isCreatingList: false })
        setMainPlaylistFormInputValue({ creatingListTextInputValue: '' })
        setMainPlaylistFormTextAreaValue({ creatingListTextAreaValue: '' })
        setMainPlaylistFormImgSrc({ creatingListImageSrc: '' })
    }

    const onTextInputChange = event => setMainPlaylistFormInputValue({ creatingListTextInputValue: event.target.value })

    const onTextAreaChange = event => setMainPlaylistFormTextAreaValue({ creatingListTextAreaValue: event.target.value })

    const onFileInputChange = event => {
        const { files } = event.target
        const file = files[0]
        const { type } = file
        if (type.includes('image')) {
            const FR = new FileReader()
            FR.addEventListener('load', fileReaderEvent => {
                const { result } = fileReaderEvent.target
                setMainPlaylistFormImgSrc({ creatingListImageSrc: result })
            })
            FR.readAsDataURL(file)
        }
    }

    const onModalSubmit = event => {
        event.preventDefault()
        const list = {
            name: creatingListTextInputValue,
            description: creatingListTextAreaValue,
            image: creatingListImageSrc,
            items: [],
        }
        const playlistExists = user.lists.find(l => l.name.toUpperCase() === list.name.toUpperCase())
        if (playlistExists) {
            setMainErrorMessage({ message: `La lista ${list.name} ya existe` })
            return
        }
        const lists = [...user.lists, list]
        const payload = {
            id: user._id,
            lists,
        }
        setMainMyListsRequest(payload)
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
                    cards={user ? user.lists : []}
                />
            </MainLayout>
        </RedirectBoundary>
    )
})
