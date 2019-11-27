import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, ButtonLoader, RedirectBoundary, SnackbarNotification } from '../components'
import { setMainAudioSearchResultsRequest, setMainErrorMessage } from '../actions'

import styles from '../styles/pages/SearchAudioPage.module.scss'

const mapStateToProps = state => {
    return {
        ...state.main,
    }
}

const mapDispatchToProps = {
    setMainAudioSearchResultsRequest,
    setMainErrorMessage,
}

export const SearchAudioPage = connect(mapStateToProps, mapDispatchToProps)(props => {
    const {
        setMainAudioSearchResultsRequest,
        history,
        audioSearch,
        error,
        setMainErrorMessage,
    } = props
    const { isLoading } = audioSearch
    const [record, setRecord] = useState(false)
    const [isRecording, setIsRecording] = useState(false)
    const [seconds, setSeconds] = useState(10)
    const stopRecording = () => setRecord(false)

    const onStop = async data => {
        const { blob } = data
        setSeconds(10)
        const reader = new FileReader()
        reader.readAsDataURL(blob)
        reader.onloadend = function () {
            const base64data = reader.result
            setMainAudioSearchResultsRequest(base64data, () => history.push('buscar'))
        }
    }

    const startRecording = () => {
        setRecord(true)
        const timer = setInterval(() => setSeconds(seconds => seconds - 1), 1000)
        setTimeout(() => {
            stopRecording()
            clearInterval(timer)
            setIsRecording(false)
        }, 10000)
    }
    const onDataHandler = () => (!isRecording ? setIsRecording(true) : null)

    const closeSnackbarHandler = (_event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setMainErrorMessage({ message: '' })
    }

    if (typeof window !== 'undefined') {
        const { ReactMic } = require('react-mic')

        return (
            <RedirectBoundary>
                <SnackbarNotification
                    variant='error'
                    message={error}
                    onClose={closeSnackbarHandler}
                    open={!!error}
                />
                <div
                    className={styles['search-audio__container']}
                >
                    <ReactMic
                        record={record}
                        className={styles['search-audio__wave']}
                        onStop={onStop}
                        strokeColor='#fff'
                        backgroundColor='#131313'
                        onData={onDataHandler}
                    />
                    <Button
                        onClick={startRecording}
                        disabled={isRecording || isLoading}
                        className={styles['search-audio__button']}
                    >
                        {isLoading ? <ButtonLoader/> : isRecording ? `Grabando, espera ${seconds} segundos` : 'Grabar'}
                    </Button>
                </div>
            </RedirectBoundary>
        )
    }

    return null
})
