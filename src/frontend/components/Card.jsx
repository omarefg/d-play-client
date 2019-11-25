import React, { useState } from 'react'
import { connect } from 'react-redux'
import { CirclePlayIcon, MoreIcon } from '../icons'
import { SelectableMenu } from './SelectableMenu'
import { Modal } from './Modal'
import {
    setMainPlaylistFormInputValue,
    setMainPlaylistFormTextAreaValue,
    setMainPlaylistFormImgSrc,
    setMainIsCreatingPlaylist,
    setMainMyListsRequest,
    setMainIsEditingPlaylist,
    setMainPlaylistFormId,
} from '../actions'

import styles from '../styles/components/Card.module.scss'

const mapStateToProps = state => {
    return {
        myLists: state.main.myLists,
        user: state.auth.user,
    }
}

const mapDispatchToProps = {
    setMainIsCreatingPlaylist,
    setMainPlaylistFormInputValue,
    setMainPlaylistFormTextAreaValue,
    setMainPlaylistFormImgSrc,
    setMainMyListsRequest,
    setMainIsEditingPlaylist,
    setMainPlaylistFormId,
}

export const Card = connect(mapStateToProps, mapDispatchToProps)(props => {
    const {
        artist,
        album,
        src,
        title,
        onClick,
        isLoading,
        withMenu,
        canDelete,
        card,
        user,
        setMainIsCreatingPlaylist,
        setMainPlaylistFormInputValue,
        setMainPlaylistFormTextAreaValue,
        setMainPlaylistFormImgSrc,
        setMainMyListsRequest,
        setMainIsEditingPlaylist,
        setMainPlaylistFormId,
    } = props

    const [anchorEl, setAnchorEl] = useState(null)

    const [listToDelete, setListToDelete] = useState(null)

    const closeSelectableMenu = () => setAnchorEl(null)

    const closeListToDeleteHandler = () => setListToDelete(null)

    const openSelectableMenu = event => setAnchorEl(event.target)

    let menuActions = [{ name: 'Editar' }, { name: 'Eliminar' }]

    if (!canDelete) {
        menuActions = [{ name: 'Editar' }]
    }

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

    const editPlaylistHandler = () => {
        setMainIsCreatingPlaylist({ isCreatingList: true })
        setMainIsEditingPlaylist({ isEditingList: true })
        setMainPlaylistFormInputValue({ creatingListTextInputValue: card.name })
        setMainPlaylistFormTextAreaValue({ creatingListTextAreaValue: card.description })
        setMainPlaylistFormImgSrc({ creatingListImageSrc: card.image })
        setMainPlaylistFormId({ creatingListId: card.id })
    }

    const onMenuItemClick = index => {
        const actualIndex = index - 1
        switch (actualIndex) {
        case 0: {
            editPlaylistHandler()
            break
        }
        case 1: {
            setListToDelete(card)
            break
        }
        default: {
            break
        }
        }
        closeSelectableMenu()
    }

    return (
        <div className={styles['card__container']}>
            {isLoading ? (
                <div
                    className={styles['card__loading--square']}
                />
            ) : (
                <>
                    <div
                        className={styles['card__controls']}
                    >
                        <CirclePlayIcon
                            className='icon__container--card-control'
                            onClick={onClick}
                        />
                    </div>
                    <img
                        alt={title}
                        height='140'
                        src={src}
                        title={title}
                    />
                    <p>{artist}</p>
                    <p>{album}</p>
                    {withMenu && (
                        <>
                            <span
                                className={styles['card__delete-button']}
                            >
                                <MoreIcon
                                    onClick={openSelectableMenu}
                                />
                            </span>
                            <SelectableMenu
                                items={menuActions}
                                anchorEl={anchorEl}
                                id='card__selectable--menu'
                                onClose={closeSelectableMenu}
                                onItemClick={onMenuItemClick}
                            />
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
                        </>
                    )}
                </>
            )}
        </div>
    )
})
