import React from 'react'
import { TextInput } from './TextInput'
import { TextArea } from './TextArea'

import { HeadphoneIcon } from '../icons'

import styles from '../styles/components/PlaylistsForm.module.scss'

export const PlaylistForm = props => {
    const {
        onSubmit,
        textInputValue,
        onTextInputChange,
        textAreaValue,
        onTextAreaChange,
        onFileInputChange,
        src,
        formID,
    } = props

    return (
        <form
            className={styles['playlists-form__container']}
            onSubmit={onSubmit}
            id={formID}
        >
            <div
                className={styles['playlists-form__subcontainer']}
            >
                <label
                    htmlFor='playlists-form-img'
                    className={styles['playlists-form__label']}
                >
                    {src ? (
                        <img
                            alt='playlist'
                            src={src}
                        />
                    ) : (
                        <>
                            <HeadphoneIcon
                                className='icon__container--add-playlist-control'
                            />
                            <p>Escoge una imagen</p>
                        </>
                    )}
                    <input
                        type='file'
                        id='playlists-form-img'
                        onChange={onFileInputChange}
                    />
                </label>
            </div>
            <div
                className={styles['playlists-form__subcontainer']}
            >
                <TextInput
                    placeholder='Nombre'
                    id='playlists__form-input'
                    value={textInputValue}
                    onChange={onTextInputChange}
                    required
                />
                <TextArea
                    placeholder='Descripción'
                    id='playlists__form-textarea'
                    value={textAreaValue}
                    onChange={onTextAreaChange}
                />
            </div>
        </form>
    )
}
