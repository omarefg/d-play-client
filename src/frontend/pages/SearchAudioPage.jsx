import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, ButtonLoader, RedirectBoundary, SnackbarNotification, RecLoader } from '../components'
import { AudioSearchIcon } from '../icons'
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
    const [isRecording, setIsRecording] = useState(false)
    const [seconds, setSeconds] = useState(10)

    const requestResults = blob => {
        const reader = new FileReader()
        reader.readAsDataURL(blob)
        reader.onloadend = function () {
            const base64data = reader.result
            setIsRecording(false)
            setSeconds(10)
            setMainAudioSearchResultsRequest(base64data, () => history.push('buscar'))
        }
    }
    const stopRecording = (stream, rec) => {
        rec.stop()
        stream.getAudioTracks()[0].stop()
        rec.exportWAV(requestResults)
    }

    const startRecording = async () => {
        let stream
        let rec
        try {
            stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false })
            const AudioContext = window.AudioContext || window.webkitAudioContext
            const audioContext = new AudioContext()
            const audio = audioContext.createMediaStreamSource(stream)
            rec = new Recorder(audio)
            rec.record()
            setIsRecording(true)
            const timer = setInterval(() => setSeconds(seconds => seconds - 1), 1000)
            setTimeout(() => {
                clearInterval(timer)
                stopRecording(stream, rec)
            }, 10000)
        } catch (error) {
            console.log(error)
            rec && rec.stop()
            stream && stream.getAudioTracks()[0].stop()
            setMainErrorMessage({ message: 'No se pudo iniciar el micrófono' })
        }
    }

    const closeSnackbarHandler = (_event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setMainErrorMessage({ message: '' })
    }

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
                <div className={styles['search-audio__mic-container']}>
                    <AudioSearchIcon
                        className={styles['search-audio__icon']}
                    />
                    <RecLoader
                        isLoading={isRecording}
                    />
                </div>
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
})
